import { User } from "../Models/user.model.js";
import { apiError } from "../Utils/apiError.js";
import { apiResponse } from "../Utils/apiResponse.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
        user.refreshToken = refreshToken;
        user.save({ validateBeforeSave: false });

        return {
            accessToken, refreshToken
        }
    }
    catch (error) {
        throw new apiError(500, "Error while genrating access token and refresh token")
    }
}

const registerUser = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    if ([firstName, lastName, email, password].some((field) => (field?.trim === " "))) {
        return next(new apiError(401, "All fields are required"))
    }

    const isUserAvailable = await User.findOne({ email: email });
    if (isUserAvailable) return next(new apiError(401, "User already exists"));

    const user = await User.create({
        firstName,
        lastName,
        email,
        password
    })

    if (!user) return next(new apiError(500, "Unable to register user"));

    const createdUser = await User.findOne({ email: email }).select("-password -about");

    return res
        .status(201)
        .json(new apiResponse(201, createdUser, "User registerd successfully"))

});

const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) return next(new apiError(401, "Email and password required"));

    const user = await User.findOne({ email: email });

    if (!user) return next(new apiError(404, "User not found"));

    const isPassValid = await user.isPasswordCorrect(password);

    if (!isPassValid) return next(new apiError(401, "Password is invalid"));

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user?._id);

    const loggedInUser = await User.findById(user._id).select("-password");


    //Not using the cookies in devlopment 
    // const options = {
    //     httpOnly: false,
    //     secure: false,       
    //    sameSite: "none",    
    // }

    return res
        .status(200)
        .json(new apiResponse(200, { user: loggedInUser, accessToken: accessToken, refreshToken: refreshToken }, "User Logged in successfully"))
});

const logoutUser = asyncHandler(async (req, res, next) => {
    const userId = req.user?._id;
    if (!userId) return next(new apiError(400, "User is not authenticated"));

    await User.findByIdAndUpdate(userId, {
        $unset: {
            refreshToken: 1
        }
    }, { new: true })


    // const options = {
    //     httpOnly: true,
    //     secure: false,
    //     sameSite: "lax",
    // }

    return res
        .status(200)
        .json(new apiResponse(200, {}, "User logged out successfully"))
})

const getCurrentUser = asyncHandler(async (req, res, next) => {
    const userId = req.user?._id;
    if (!userId) return next(new apiError(400, "User is not authenticated"));

    const user = await User.findById(userId).select("-password");

    return res
        .status(200)
        .json(new apiResponse(200, { user: user }, "User fetched successfully"));
})

const updateAccountDetails = asyncHandler(async (req, res) => {
    const { firstName, lastName, about } = req.body;
    const changes = {};
    if (!firstName && !lastName && !about) return (new apiError(401, "At least 1 field is required"));
    if (firstName) changes.firstName = firstName;
    if (lastName) changes.lastName = lastName;
    if (about) changes.about = about;

    const userId = req.user?._id;
    if (!userId) return next(new apiError(400, "User is not authenticated"));

    const user = await User.findByIdAndUpdate(userId, changes, { new: true }).select("-password");

    return res
        .status(201)
        .json(new apiResponse(201, { user: user }, "Details updated successfully"))
})

const updatePassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) return next(new apiError(401, "Both field are required"));

    const userId = req.user?._id;
    if (!userId) return next(new apiError(400, "User is not authenticated"));

    const user = await User.findById(userId);

    const isPassValid = await user.isPasswordCorrect(oldPassword);

    if (!isPassValid) return next( new apiError(401, "Password is invalid"));

    user.password = newPassword;
    user.save({ validateBeforeSave: false });

    return res
        .status(200)
        .json(new apiResponse(200, {}, "Password updated successfully"))

})

const refreshAccessToken = asyncHandler(async (req, res, next) => {
    const incomingRefreshToken = req.cookies?.accessToken || req.body?.refreshToken;

    if (!incomingRefreshToken) return next(new apiError(401, "Refresh token is required"));

    const decode = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET_KEY);

    if (!decode) return next(new apiError(400, "Refresh token is not valid"));

    const user = await User.findById(decode?._id).select("-password");

    if (!user) return next(new apiError(404, "User not found"));

    const userRefreshToken = user?.refreshToken;

    if (userRefreshToken !== incomingRefreshToken) return next(new apiError(400, "Refresh token is incorrect"));

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user?._id);

    // const options = {

    //     httpOnly: true,
    //     secure: false,       // false in dev, true in production
    //     sameSite: "none",    // needed for cross-site (5173 → 8000)

    // }

    return res
        .status(200)
        .json(new apiResponse(200, { user: user, accessToken: accessToken, refreshToken: refreshToken }, "Access token is refreshed"))
})


export {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    updateAccountDetails,
    updatePassword,
    refreshAccessToken
}