//Interfaces 
import { MainUserLogged } from "../interfaces/mainUser.interface"

declare namespace Express {
  export interface Request {
    user: MainUserLogged;
  }
} 