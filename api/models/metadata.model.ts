import mongoose, { Schema, Document } from "mongoose";
import { metadata } from "../types/metadata.type";

/**
 * Metadata Mongoose schema
 * @type {Schema<metadata>}
 */
const metadataSchema: Schema<metadata> = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  week: { type: Number, required: true },
  day: { type: Number, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  cycle: { type: Number, required: true },
  clinic: { type: String, required: true },
  alergies: { type: [String], default: [] },
});

/**
 * Metadata model to interact with MongoDB
 * @type {mongoose.Model<metadata>}
 */
const Metadata = mongoose.model<metadata>('Metadata', metadataSchema);

export default Metadata;
