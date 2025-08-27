import mongoose from "mongoose";
import dbName from "../constant.js"

const DBConnect = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${dbName}`)
        console.log("The database is connected to instance",connectionInstance.connection.host);
    } catch (error) {
        console.error("Error while connecting to DB",error.message)
        process.exit(1);
    }
}

export {DBConnect}