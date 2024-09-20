import { ObjectId } from 'mongoose';
import jwt from "jsonwebtoken";

/**
 * Generates a JWT token for a given user.
 * 
 * @param {ObjectId} userId - The user ID to embed in the token.
 * @param {string} secret - The secret key used to sign the token.
 * @param {string} [expiresIn='1h'] - Token expiration time (default: 1 hour).
 * 
 * @returns {string} - The generated JWT token.
 */
export const createToken = (userId: string, secret: string, expiresIn: string = '1h'): string => {
    return jwt.sign({ id: userId }, secret, { expiresIn });
};
