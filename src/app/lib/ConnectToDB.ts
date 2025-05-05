import mongoose from "mongoose";

const MONGO_URI: string = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI env");
}
let isConnected: boolean = false;

export async function conectToB(): Promise<void> {
  if (isConnected) {
    console.log("Already connected to MongoDb");
    return;
  }
  try {
    await mongoose.connect(MONGO_URI);
    isConnected = true;
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log("Error connectiong to mongodb", error);
  }
}
