import express from "express";
import { healthcheck } from "../Controllers/healthCheck.controller.js";

const router = express.Router();

router.route("/").get(healthcheck);

export { router }