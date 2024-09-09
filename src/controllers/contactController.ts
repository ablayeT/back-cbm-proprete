import { Request, Response } from "express";
import Contact from "../models/Contact";

export const createContact = async (req: Request, res: Response) => {
  const { first_name, last_name, phone_number, email, message } = req.body;

  console.log("req.body:", req.body); // Ajoute ce log pour voir les données envoyées

  if (!first_name || !last_name || !phone_number || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const contact = new Contact({
      first_name,
      last_name,
      phone_number,
      email,
      message,
    });
    console.log("contact:", contact);
    await contact.save();
    res
      .status(201)
      .json({
        message:
          "Nous avons bien reçu votre demande, nous reviendrons dans un bref délai",
      });
  } catch (err) {
    console.log("error:", err);
    res.status(400).json({ message: "Error saving contact information" });
  }
};
