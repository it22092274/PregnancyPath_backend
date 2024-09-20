import User from "../models/user.model";
import { users_t } from '../types/user.type';

/**
 * Fetches a user by email.
 * 
 * @param {string} email - The email address of the user to fetch.
 * 
 * @returns {Promise<users_t | null>} - The user object if found, otherwise null.
 */
export const readUserByEmail = async (email: string): Promise<users_t | null> => {
    return await User.findOne({ email: email });
};

/**
 * Adds a new user to the database.
 * 
 * @param {users_t} userData - The user data to add.
 * 
 * @returns {Promise<users_t>} - The newly added user object.
 */
export const addUser = async (userData: users_t): Promise<users_t> => {
    const newUser = new User(userData);
    return await newUser.save();
};

/**
 * Updates user data based on the provided user ID.
 * 
 * @param {users_t} userData - The user data to update.
 * @param {string} id - The ID of the user to update.
 * 
 * @returns {Promise<users_t | null>} - The updated user object if successful, otherwise null.
 */
export const editUser = async (userData: users_t, id: string): Promise<users_t | null> => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

/**
 * Deletes a user based on the provided user ID.
 * 
 * @param {string} id - The ID of the user to delete.
 * 
 * @returns {Promise<users_t | null>} - The deleted user object if successful, otherwise null.
 */
export const deleteUser = async (id: string): Promise<users_t | null> => {
    return await User.findByIdAndDelete(id);
};
