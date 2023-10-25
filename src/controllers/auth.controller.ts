import { Request, Response } from "express";

//Queries
import { CREATEUSER, FINDUSERIFEXISTS } from "../queries";

export const registerMainUser = async (req: Request, res: Response) => {
  const {username ,email, password} = req.body;
  const {rows} = await FINDUSERIFEXISTS(email);
  console.log(username ,email, password);
  if (rows.length > 0) {
    console.log(rows);
    return res.status(400).json({message: "Usuario ya registrado"});
  }
  try {
    const mainUserCreated = await CREATEUSER(username, email, password);
    console.log(mainUserCreated);
    res.status(200).json({message: "Usuario creado correctamente"})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Error al crear el usuario"})
  }
}

