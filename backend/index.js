import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRouter.js";
import messageRoute from "./routes/messageRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js"; // ✅ app भी import करो

dotenv.config({});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8080; // ✅ 8080 रखो

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

connectDB().then(() => {
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
