import { Request, Response } from 'express';
import { getMetadata, initialize, updateMetadata } from './../services/metadata.service';
import mongoose from 'mongoose';

/**
 * Controller to handle initialization of Metadata.
 * @param {Request} request - Express request object containing body with metadata fields.
 * @param {Response} response - Express response object to send back the result.
 * @returns {Promise<Response>} Response with the status and initialized metadata or error.
 */
export const initController = async (request: Request, response: Response) => {
    try {
        const init = await initialize(request.body); // Await the promise
        if (!init) return response.status(500).json({ message: "Error initializing" });

        return response.status(200).json(init);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Error initializing" });
    }
};

/**
 * Controller to handle updating of Metadata.
 * @param {Request} request - Express request object containing body with updated metadata.
 * @param {Response} response - Express response object to send back the result.
 * @returns {Promise<Response>} Response with the status and updated metadata or error.
 */
export const updateController = async (request: Request, response: Response) => {
    try {
        const updatedMetadata = await updateMetadata(request.body); // Await the promise
        if (!updatedMetadata) return response.status(500).json({ message: "Error updating" });

        return response.status(200).json(updatedMetadata);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Error updating" });
    }
};


/**
 * Controller to handle fetching of Metadata.
 * @param {Request} request - Express request object containing body with fetched metadata.
 * @param {Response} response - Express response object to send back the result.
 * @returns {Promise<Response>} Response with the status and fetched metadata or error.
 */
export const getController = async (request: Request, response: Response) => {
    try {
        const { id } = request.params
        const metadata = await getMetadata(id); // Await the promise
        if (!metadata) return response.status(500).json({ message: "No meta data found" });

        return response.status(200).json(metadata);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Error updating" });
    }
};
