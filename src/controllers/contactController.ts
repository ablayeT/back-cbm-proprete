import { Request, Response } from "express";
import Contact from "../models/Contact";

export const createContact = async (req: Request, res: Response) => {
  const { first_name, last_name, phone_number, email, message } = req.body;

  try {
    const contact = new Contact({
      first_name,
      last_name,
      phone_number,
      email,
      message,
    });
    await contact.save();
    res.status(201).json({ message: "Contact information received" });
  } catch (err) {
    res.status(400).json({ message: "Error saving contact information" });
  }
};
