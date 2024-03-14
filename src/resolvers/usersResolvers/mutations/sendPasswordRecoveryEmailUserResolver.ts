import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";
import nodemailer from "nodemailer";
import { SendMailOptions } from "nodemailer";

export const sendPasswordRecoveryEmailUserResolver = {
  Mutation: {
    sendPasswordRecoveryEmailUser: async (
      _: any,
      {
        email,
        company,
      }: {
        email: string;
        company: string;
      }
    ) => {
      const generateRandomString = (length: number) => {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        return result;
      };

      const temporaryAccessKey = generateRandomString(10);

       // Get dynamic database URL based on company and type
       const dynamicUsersDatabaseUrl = await getDynamicDatabaseUrl(
        company,
        "users"
      );

      // Set environment variable for database URL
      process.env.MONGODB_URL_USERS = dynamicUsersDatabaseUrl;

      const prisma = new PrismaClient();

      let existingUser;
      let updatedUser;

      try {
        existingUser = await prisma.users.findUnique({
          where: {
            email: email,
          },
          select: {
            firstName: true,
            lastName: true,
          },
        });

        if (!existingUser) {
          throw new Error(`User with email ${email} not found`);
        }

        updatedUser = await prisma.users.update({
          where: { email: email },
          data: {
            temporaryAccessKey: temporaryAccessKey,
          },
          select: {
            firstName: true,
            lastName: true,
            temporaryAccessKey: true,
          },
        });

        if (!updatedUser) {
          throw new Error(`Failed to update user with email ${email}`);
        }

        // Create transporter for sending email
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS,
          },
        });

        // Function to send email
        const sendEmail = async (mailOptions: SendMailOptions) => {
          return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                reject(error);
              } else {
                resolve(info);
              }
            });
          });
        };

        const mailOptions = {
          from: process.env.NODEMAILER_USER,
          to: email,
          subject: "Your Temporary Access Key for Soltase",
          text: "This is a test email from Node.js",
          html: `<!DOCTYPE html>
                <html>
                <body>
                    <h1>Password Recovery</h1>
                    <p>Dear ${
                      existingUser?.firstName ?? "User"
                    } ${existingUser?.lastName},</p>
                    <p>We received a request to reset your password. Please use the following as your Access Key where requested:</p>
                    <p><strong>Access Key:</strong> ${temporaryAccessKey}</p>
                    <p>If you did not request this password reset, please contact our support team immediately.</p>
                    <p>Thank you for using Soltase Solutions.</p>
                    <p>Best regards,</p>
                    <p>Soltase Support Team</p>
                </body>
                </html>`,
        };

        // Send email
        await sendEmail(mailOptions);
      } catch (error) {
        throw new Error(`Error sending email: ${(error as Error).message}`);
      } finally {
        await prisma.$disconnect();
      }

      return updatedUser;
    },
  },
};
