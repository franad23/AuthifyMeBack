import { Router } from "express";

//Controllers
import { registerMainUser, loginMainUser, verifyTokenController } from "../controllers/auth.controller";

//Middlewares
import verifyToken from "../middlewares/verifyToken.middleware";

const router = Router();

router.post("/register", registerMainUser)
router.post("/login", loginMainUser)
router.get("/", verifyToken, verifyTokenController)

export default router;
