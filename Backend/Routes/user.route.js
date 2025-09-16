import express from "express";
import { apiVerification } from "../Middlewares/authentication.middleware.js";
import {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    updateAccountDetails,
    updatePassword,
    refreshAccessToken
} from "../Controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(apiVerification, logoutUser);
router.route("/get-current-user").get(apiVerification, getCurrentUser);
router.route("/update-account-details").patch(apiVerification, updateAccountDetails);
router.route("/update-password").patch(apiVerification, updatePassword);
router.route("/refresh-access-token").post(refreshAccessToken);

export {
    router
}

