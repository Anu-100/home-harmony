import express from "express";
import { signup, signin } from "../controllers/auth_controller.js";

const router = express.Router()

router.post("/sign-up", signup)
router.post("/sign-in", signin)

export default router