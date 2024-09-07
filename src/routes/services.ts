import { Router, Request, Response } from "express";
import Service from "../models/service";

const router: Router = Router();

// GET tous les services
router.get("/", async (req: Request, res: Response) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
});

// POST un nouveau service
router.post("/", async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  const newService = new Service({ name, description, price });

  try {
    const savedService = await newService.save();
    res.json(savedService);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: "An unknown error occurred" });
    }
  }
});

export default router;
