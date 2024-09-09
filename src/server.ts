import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter";
import contactRouter from "./routes/contactRouter";
import reservationRouter from "./routes/reservationRouter";

// Charger les variables d'environnement en fonction du NODE_ENV
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

// Vérifier que MONGO_URI est bien défini
if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in environment variables");
}

const app: Application = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    serverSelectionTimeoutMS: 30000,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
// Routes
app.use("/api/auth", authRouter);
app.use("/api/contact", contactRouter);
app.use("/api/reservations", reservationRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
