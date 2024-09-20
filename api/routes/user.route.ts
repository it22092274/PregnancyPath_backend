import express from 'express';
import { deleteProfile, editProfile, getProfile, login, signup , forgotPassword} from '../controllers/user.controller';

const router = express.Router();

/**
 * @route POST /login
 * @desc Logs in a user by validating their email and password, then returns a JWT token if successful.
 * @access Public
 * @returns {JSON} - JWT token if login is successful, otherwise an error message.
 */
router.post('/login', login);

/**
 * @route POST /signup
 * @desc Registers a new user by creating an account with the provided email and password.
 * @access Public
 * @returns {JSON} - Success message if signup is successful, otherwise an error message.
 */
router.post('/signup', signup);

/**
 * @route GET /
 * @desc Retrieves the user's profile based on the provided email.
 * @access Public (can be restricted depending on authentication setup)
 * @returns {JSON} - User profile data if the user is found, otherwise an error message.
 */
router.get('/:id', getProfile);

/**
 * @route PUT /
 * @desc Updates the user's profile, including name, email, contact, and address.
 * @access Public (can be restricted depending on authentication setup)
 * @returns {JSON} - Success message and updated profile if successful, otherwise an error message.
 */
router.put('/:id', editProfile);

/**
 * @route DELETE /
 * @desc Deletes the user's profile based on the provided user ID.
 * @access Public (can be restricted depending on authentication setup)
 * @returns {JSON} - Success message if deletion is successful, otherwise an error message.
 */
router.delete('/', deleteProfile);

router.put('/auth/:id', forgotPassword);

export default router;
