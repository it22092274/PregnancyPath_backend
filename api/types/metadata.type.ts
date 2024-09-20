import mongoose from "mongoose";

/**
 * Type definition for Metadata object
 * @typedef {Object} metadata
 * @property {mongoose.Schema.Types.ObjectId} id - Unique identifier for the metadata
 * @property {number} [week] - Week number (optional)
 * @property {number} [day] - Day number (optional)
 * @property {number} [weight] - Weight of the individual (optional)
 * @property {number} [height] - Height of the individual (optional)
 * @property {number} [cycle] - Cycle count (optional)
 * @property {string} [clinic] - Clinic name or identifier (optional)
 * @property {string[]} [alergies] - List of allergies (optional)
 */
export type metadata = {
    id: mongoose.Schema.Types.ObjectId;
    week?: number;
    day?: number;
    weight?: number;
    height?: number;
    cycle?: number;
    clinic?: string;
    alergies?: string[];
};
