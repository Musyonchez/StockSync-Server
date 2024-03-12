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
      console.log("sendPasswordRecoveryEmailUser resolver starting", email);

      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, "users");

      process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;

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

      console.log("temporaryAccessKey string", temporaryAccessKey);

      const prisma = new PrismaClient();

      let existingUser; // Declare the variable outside the try block

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
      } catch (error) {
        console.log("error finding existing user", error);
        throw new Error(`Error finding existing user: ${(error as Error).message}`);
      }

      let updatedUser;

      try {
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

      } catch (error) {
        console.log("error updating user", error);
        throw new Error(`Error updating user: ${(error as Error).message}`);
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "musyonchez@gmail.com",
          pass: "iaxz xcta abmc jxox",
        },
      });

      const sendEmail = async (mailOptions: SendMailOptions) => {
        return new Promise((resolve, reject) => {
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error("Error sending email:", error);
              reject(error);
            } else {
              console.log("Email sent:", info.response);
              resolve(info);
            }
          });
        });
      };

      const mailOptions = {
        from: "musyonchez@gmail.com",
        to: email,
        subject: "Your Temporary Access Key for Soltase",
        text: "This is a test email from Node.js",
        html: `<!DOCTYPE html>
                <html>
                <head>
                    <title>Password Recovery</title>
                </head>
                <body>
                    <h1>Password Recovery</h1>
                    <p>Dear ${existingUser?.firstName ?? "User"} ${
          existingUser?.lastName
        },</p>
                    <p>We received a request to reset your password. Please use the following as your Access Key where requested:</p>
                    <p><strong>Access Key:</strong> ${temporaryAccessKey}</p>
                    <p>If you did not request this password reset, please contact our support team immediately.</p>
                    <p>Thank you for using Soltase Solutions.</p>
                    <p>Best regards,</p>
                    <p>Soltase Support Team</p>
                </body>
                </html>`,
      };

      try {
        const info = await sendEmail(mailOptions);
        console.log("Email sent successfully:", info);
      } catch (error) {
        console.error("Failed to send email:", error);
      }

      return updatedUser;

    },
  },
};
