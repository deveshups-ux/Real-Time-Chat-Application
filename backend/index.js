import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRouter.js";
import messageRoute from "./routes/messageRouter.js";
import cookieParser from "cookie-parser";

dotenv.config({});
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
