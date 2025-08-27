import { app } from "./app";
import dotenv from "dotenv";
import { DBConnect } from "./Database/db";
import { apiError } from "./Utils/apiError";

dotenv.config({
    path: "./env"
})

DBConnect()
    .then(app.listen(process.env.PORT || 3000, () => {
        console.log(`The server is running successfully on ${process.env.PORT}`)
    }))
    .catch((error) => {
        console.error("Unable to connect to DB", error.message)
        throw new apiError(500, "DB connection problem")
    })

