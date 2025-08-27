import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin:process.env.ALLOWED_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(cookieParser());

import { router as userRouter } from "./Routes/user.route.js";
import { router as healthCheckRouter } from "./Routes/healthCheck.route.js";


app.use("/api/v1/healthcheck",healthCheckRouter)
app.use("/api/v1/users",userRouter);

export {app}