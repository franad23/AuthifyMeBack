import { Request, Response } from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

dotenv.config();
//Queries
import { CREATEUSER, FINDUSERIFEXISTS } from "../queries";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export const registerMainUser = async (req: Request, res: Response) => {
  const {username ,email, password} = req.body;
  const apiKey = uuidv4();
  const passwordEncrypted = await bcrypt.hash(password, 10)
  const {rows} = await FINDUSERIFEXISTS(email);
  if (rows.length > 0) {
    console.log(rows);
    return res.status(400).json({message: "Usuario ya registrado"});
  }
  try {
    const mainUserCreated = await CREATEUSER(apiKey, username, email, passwordEncrypted);
    console.log(mainUserCreated);
    const msg = {
      to: {email}, // Change to your recipient
      from: 'dfrancoandres@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
    res.status(200).json({message: "Usuario creado correctamente"})
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Error al crear el usuario"})
  }
}

