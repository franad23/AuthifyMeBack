import { Router } from "express";
//Controllers
import { registerMainUser, loginMainUser } from "../controllers/auth.controller";

const router = Router();

router.post("/register", registerMainUser)
router.post("/login", loginMainUser)

export default router;
