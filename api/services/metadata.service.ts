import Metadata from "../models/metadata.model";
import mongoose from "mongoose";
import { metadata } from "../types/metadata.type";

/**
 * Initializes and saves a new Metadata document.
 * @param {Object} initializingObject - The data object to initialize the metadata.
 * @returns {Promise<metadata>} The saved Metadata document.
 */
export const initialize = async (initializingObject: Object) => {
    const init = new Metadata(initializingObject);
    const savedInit = await init.save();
    return savedInit;
};

/**
 * Updates an existing Metadata document by its ID.
 * @param {metadata} dataObject - The Metadata object containing updated fields and its ID.
 * @returns {Promise<metadata|null>} The updated Metadata document or null if not found.
 */
export const updateMetadata = async (dataObject: metadata) => {
    const updateData = Metadata.findByIdAndUpdate(
        dataObject.id,
        dataObject,
        { new: true }
    );
    return updateData;
};

/**
 * Get the existing Metadata document by its ID.
 * @param {metadata} dataObject - The Metadata object containing fetched fields and its ID.
 * @returns {Promise<metadata|null>} The fetched Metadata document or null if not found.
 */
export const getMetadata = async (id: string) => {
    const data = Metadata.find({_id: id});
    return data;
};
