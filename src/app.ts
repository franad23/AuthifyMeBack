import express  from "express";
import cors from "cors";
import morgan from "morgan";

//Routes
import AuthRoutes from "./routes/auth.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", AuthRoutes)

export default app;
