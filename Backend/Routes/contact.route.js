import express from 'express';
import { sendMessage } from '../Controllers/contact.controller.js';

const router = express.Router();

router.route("/send-message").post(sendMessage);

export {
    router
}