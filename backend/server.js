import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectMongoDb from "./db/connectMongoDb.js";
import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);

app.listen(5001, () => {
  connectMongoDb();
  console.log(`Server running port ${PORT}`);
});
