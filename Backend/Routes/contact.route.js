import express from 'express';
import { sendMessage } from '../Controllers/contact.controller';

const router = express.Router();

router.route("/send-message").post(sendMessage);

export {
    router
}