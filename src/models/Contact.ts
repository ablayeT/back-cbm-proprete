import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

export default model("Contact", contactSchema);
