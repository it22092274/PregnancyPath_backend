import express from 'express';
import { getController, initController, updateController } from '../controllers/metadata.controller';

const router = express.Router();

/**
 * Route to initialize a new Metadata document.
 * POST /metadata
 * @route POST /
 * @group Metadata - Operations related to metadata
 * @returns {metadata.model} 200 - Success with initialized Metadata
 * @returns {Error} 500 - Internal server error
 */
router.post('/', initController);

/**
 * Route to update an existing Metadata document.
 * PUT /metadata
 * @route PUT /
 * @group Metadata - Operations related to metadata
 * @returns {metadata.model} 200 - Success with updated Metadata
 * @returns {Error} 500 - Internal server error
 */
router.put('/', updateController);

/**
 * Route to fetch an existing Metadata document.
 * GET /metadata
 * @route GET /
 * @group Metadata - Operations related to metadata
 * @returns {metadata.model} 200 - Success with updated Metadata
 * @returns {Error} 500 - Internal server error
 */
router.get('/:id', getController);

export default router;
