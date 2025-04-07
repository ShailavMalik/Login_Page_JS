import express from "express";
import { signUp, signIn, signOut } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("./signOut", signOut);

export default router;
