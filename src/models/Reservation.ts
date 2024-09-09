import mongoose, { Document, Schema } from "mongoose";

export interface IReservation extends Document {
  clientName: string;
  address: string;
  email: string;
  phoneNumber: string;
  service:
    | "Nettoyage de maison"
    | "Nettoyage de bureau"
    | "Nettoyage fin de chantier";
  reservationDate: Date;
  description: string;
}

const reservationSchema: Schema = new Schema({
  clientName: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  service: {
    type: String,
    enum: [
      "Nettoyage de maison",
      "Nettoyage de bureau",
      "Nettoyage fin de chantier",
    ],
    required: true,
  },
  reservationDate: { type: Date, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IReservation>("Reservation", reservationSchema);
