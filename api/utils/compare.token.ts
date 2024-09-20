import bcrypt from 'bcrypt'

/**
 * Compares a plain text password with a hashed password.
 * 
 * @param {string} plainPassword - The plain text password to compare.
 * @param {string} hashedPassword - The hashed password from the database.
 * 
 * @returns {Promise<boolean>} - True if passwords match, otherwise false.
 */
export const comparePassword = (password: string, hashPassword: string) => {
    return bcrypt.compare(password, hashPassword)
}