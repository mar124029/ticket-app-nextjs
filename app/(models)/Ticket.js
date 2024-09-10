import mongoose, { Schema } from "mongoose";
import { global } from "styled-jsx/css";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a mongodb...");
  })
  .catch((error) => {
    console.log(error);
  });
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

export const Ticket =
  mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
