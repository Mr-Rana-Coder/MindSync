import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(cookieParser());

import { router as userRouter } from "./Routes/user.route.js";
import { router as healthCheckRouter } from "./Routes/healthCheck.route.js";
import { router as journalRouter } from "./Routes/journal.route.js";
import { router as contactRouter } from "./Routes/contact.route.js";
import errorHandler from "./Middlewares/errorHandler.middleware.js";

app.use("/api/v1/healthCheck",healthCheckRouter)
app.use("/api/v1/users",userRouter);
app.use("/api/v1/journal",journalRouter);
app.use("/api/v1/contact",contactRouter);
app.use(errorHandler);

export {app}