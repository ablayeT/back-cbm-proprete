import { Schema, model, Document } from "mongoose";

interface IService extends Document {
  name: string;
  description: string;
  price: number;
  createdAt: Date;
}

const ServiceSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<IService>("Service", ServiceSchema);
