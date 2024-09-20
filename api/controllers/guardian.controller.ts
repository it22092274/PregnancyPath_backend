import { Request, Response } from 'express';
import { add, update, deletes, reads } from './../services/guardian.service';
import mongoose from 'mongoose';

/**
 * Controller to handle adding a new Guardian.
 * @param {Request} request - Express request object containing body with guardian fields.
 * @param {Response} response - Express response object to send back the result.
 * @returns {Promise<Response>} Response with the status and created Guardian or error.
 */
export const addController = async (request: Request, response: Response) => {
    try {
        const newGuardian = await add(request.body);
        if (!newGuardian) return response.status(500).json({ message: "Error adding guardian" });

        return response.status(200).json(newGuardian);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Error adding guardian" });
    }
};

/**
 * Controller to handle updating an existing Guardian.
 * @param {Request} request - Express request object containing body with updated guardian fields.
 * @param {Response} response - Express response object to send back the result.
 * @returns {Promise<Response>} Response with the status and updated Guardian or error.
 */
export const updateController = async (request: Request, response: Response) => {
    try {
        const updatedGuardian = await update(request.body);
        if (!updatedGuardian) return response.status(500).json({ message: "Error updating guardian" });

        return response.status(200).json(updatedGuardian);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Error updating guardian" });
    }
};

/**
 * Controller to handle deleting an existing Guardian by ID.
 * @param {Request} request - Express request object containing guardian ID in params.
 * @param {Response} response - Express response object to send back the result.
 * @returns {Promise<Response>} Response with the status of deletion or error.
 */
export const deleteController = async (request: Request, response: Response) => {

    const { id } = request.params
    try {
        const deletedGuardian = await deletes(id);
        if (!deletedGuardian) return response.status(500).json({ message: "Error deleting guardian" });

        return response.status(200).json({ message: "Guardian deleted successfully" });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Error deleting guardian" });
    }
};

/**
 * Controller to handle reading a Guardian by ID.
 * @param {Request} request - Express request object containing guardian ID in params.
 * @param {Response} response - Express response object to send back the result.
 * @returns {Promise<Response>} Response with the found Guardian or error.
 */
export const readController = async (request: Request, response: Response) => {
    try {
        const guardian = await reads(request.params.id);
        if (!guardian) return response.status(404).json({ message: "Guardian not found" });

        return response.status(200).json(guardian);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Error reading guardian" });
    }
};
