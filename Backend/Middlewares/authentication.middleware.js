import jwt from "jsonwebtoken";
import { asyncHandler } from "../Utils/asyncHandler.js";
import { apiError } from "../Utils/apiError.js";
import { User } from "../Models/user.model.js";


const apiVerification = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.headers["authorization"]?.replace("Bearer ", "");
        if (!token) {
            return next(new apiError(401, "User is not authenticated"));
        }

        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);

        if (!decode) {
            return next(new apiError(500, "Unable to decode the Authentication key"));
        }

        const user = await User.findById(decode._id).select(" -password ");

        if (!user) {
            return next(new apiError(404, "Unable to find the user"));
        }
        req.user = user;
        next();
    } catch (error) {
        return next(new apiError(403, "Access token is expired"));
    }
})

export { apiVerification }