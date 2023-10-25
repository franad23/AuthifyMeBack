import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//Interfaces 
import { MainUserLogged } from "../interfaces/mainUser.interface";


dotenv.config();

const createAccessToken = (payload:MainUserLogged) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload,
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      })
  })
} 

export default createAccessToken;
