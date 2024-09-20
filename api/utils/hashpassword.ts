import bcrypt from 'bcrypt';

/**
 * Hashes a plain text password using bcrypt.
 * 
 * @param {string} password - The plain text password to hash.
 * @param {number} saltRounds - The number of salt rounds for bcrypt (default: 10).
 * 
 * @returns {Promise<string>} - The hashed password.
 */
export const hashPassword = async (password: string, saltRounds: number = 10): Promise<string> => {
    return await bcrypt.hash(password, saltRounds);
};
