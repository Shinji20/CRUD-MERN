import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middelwares/validateToken.js";
import { validateSchema } from "../middelwares/validator.middelware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

//abkjihgfydrfyguip

router.get("/verify", verifyToken);

router.get("/profile", authRequired, profile);

export default router;
