import { Request, Response } from "express";
import Reservation from "../models/Reservation";

export const createReservation = async (req: Request, res: Response) => {
  const {
    clientName,
    address,
    email,
    phoneNumber,
    service,
    reservationDate,
    description,
  } = req.body;

  try {
    const reservation = new Reservation({
      clientName,
      address,
      email,
      phoneNumber,
      service,
      reservationDate,
      description,
    });
    await reservation.save();
    res.status(201).json({ message: "Reservation created successfully" });
  } catch (err) {
    if (err instanceof Error) {
      res
        .status(400)
        .json({ message: "Error creating reservation", error: err.message });
    } else {
      res.status(400).json({
        message: "Error creating reservation",
        error: "Unknown error",
      });
    }
  }
};
