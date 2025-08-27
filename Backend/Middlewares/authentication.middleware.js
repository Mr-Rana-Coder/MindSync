import jwt from "jsonwebtoken";
import { asyncHandler } from "../Utils/asyncHandler.js";
import { apiError } from "../Utils/apiError.js";
import { User } from "../Models/user.model.js";


const apiVerification = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.headers("Authorization")?.replace("Bearer ", "");
        if (!token) {
            throw new apiError(401, "User is not authenticated");
        }

        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);

        if (!decode) {
            throw new apiError(500, "Unable to decode the Authentication key");
        }

        const user = await User.findById(decode._id).select(" -password ");

        if (!user) {
            throw new apiError(404, "Unable to find the user");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new apiError(500, error.message || "Error in the authentication middleware")
    }
})

export { apiVerification }