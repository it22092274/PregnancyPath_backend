import express from 'express';
import { addController, updateController, deleteController, readController } from '../controllers/guardian.controller';

const router = express.Router();

/**
 * Route to add a new Guardian.
 * POST /guardian
 * @route POST /
 * @group Guardian - Operations related to guardians
 * @returns {guardian.model} 200 - Success with created Guardian
 * @returns {Error} 500 - Internal server error
 */
router.post('/', addController);

/**
 * Route to update an existing Guardian.
 * PUT /guardian
 * @route PUT /
 * @group Guardian - Operations related to guardians
 * @returns {guardian.model} 200 - Success with updated Guardian
 * @returns {Error} 500 - Internal server error
 */
router.put('/', updateController);

/**
 * Route to delete a Guardian by ID.
 * DELETE /guardian/:id
 * @route DELETE /:id
 * @group Guardian - Operations related to guardians
 * @param {string} id - Guardian ID
 * @returns {string} 200 - Success message confirming deletion
 * @returns {Error} 500 - Internal server error
 */
router.delete('/:id', deleteController);

/**
 * Route to read a Guardian by ID.
 * GET /guardian/:id
 * @route GET /:id
 * @group Guardian - Operations related to guardians
 * @param {string} id - Guardian ID
 * @returns {guardian.model} 200 - Success with found Guardian
 * @returns {Error} 404 - Guardian not found
 */
router.get('/:id', readController);

export default router;
