import { S3Client, PutObjectCommand, S3ClientConfig } from "@aws-sdk/client-s3";

async function uploadImage(fileBuffer: Buffer, fileName: string, fileCompany: string) {
  try {
    // Check if AWS credentials are provided
    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      throw new Error("AWS credentials not provided.");  
    }

    const s3ClientConfig: S3ClientConfig = {
      region: "us-west-1", // Update this to the correct region
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    };

    const s3Client = new S3Client(s3ClientConfig);

    // Check if file company (bucket name) is provided
    if (!fileCompany) {
      throw new Error("Bucket name is not provided.");
    }

    const uploadCommand = new PutObjectCommand({
      Bucket: fileCompany,
      Key: fileName,
      Body: fileBuffer, // Use the file buffer directly
    });

    // Using an async operation to send the upload command
    const response = await s3Client.send(uploadCommand);

    if (!response) {
      throw new Error("Failed to upload image.");
    }
  } catch (error) {
    throw new Error(`Error uploading image: ${(error as Error).message}`); // Re-throw the error with a descriptive message
  } 
}

export default uploadImage;
