import { Router } from "express";
//Controllers
import { registerMainUser } from "../controllers/auth.controller";

const router = Router();

router.post("/register", registerMainUser)

export default router;
