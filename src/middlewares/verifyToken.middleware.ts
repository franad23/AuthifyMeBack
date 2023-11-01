import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Sin autorizacion, token no proporcionado o vencido" });
  try {
    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
      if (err) return res.status(403).json({ message: "Token invalido" });
      req.body.user = user;
      next();
    } );
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

export default verifyToken;