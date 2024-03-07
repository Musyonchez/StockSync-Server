import { S3Client, PutObjectCommand, S3ClientConfig } from "@aws-sdk/client-s3";
import { EventEmitter } from "events";

const accessKeyId = "AKIAQCHEZ2CBEDKAAIPB";
const secretAccessKey = "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";

const emitter = new EventEmitter();
emitter.setMaxListeners(20); // Increase the limit for this instance

async function uploadImage(fileBuffer: Buffer, fileName: string, fileCompany: string) {
  try {
    // Check if AWS credentials are provided
    if (!accessKeyId || !secretAccessKey) {
      throw new Error("AWS credentials not provided.");  
    }

    const s3ClientConfig: S3ClientConfig = {
      region: "us-west-1", // Update this to the correct region
      credentials: {
        accessKeyId: accessKeyId || "",
        secretAccessKey: secretAccessKey || "",
      },
    };

    const s3Client = new S3Client(s3ClientConfig);


    

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

    console.log(`Image ${fileName} uploaded successfully to S3!`);
    console.log("image upload response", response);
  } catch (error) {
    console.error("Error uploading image:", error);
  } 
}

export default uploadImage;
