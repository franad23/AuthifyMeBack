import express  from "express";
import cors from "cors";
import morgan from "morgan";

//Routes
import AuthRoutes from "./routes/auth.routes";

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(morgan("dev"));

app.use("/api", AuthRoutes)

export default app;
