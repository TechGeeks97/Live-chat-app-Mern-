import mongoose from "mongoose";
const connectDb = async () => {
  const url = process.env.MONGO_URI;
  if (!url) {
    throw new Error("Mongo_URI is not defined in enviornemnt variables");
  }
  try {
    await mongoose.connect(url, { dbName: "MicroserviceChatApp" });
    console.log("connected to mongodb");
  } catch (err) {
    console.error("Failed to connect to mongodb", err);
  }
};
export default connectDb;
