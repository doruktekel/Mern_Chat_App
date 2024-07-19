import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection successful");
  } catch (error) {
    console.log(error, "Mongo Db connection failed");
    process.exit(1);
  }
};

export default connectMongoDb;
