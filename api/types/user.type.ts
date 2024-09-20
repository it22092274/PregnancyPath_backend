/**
 * Type definition for a User object.
 * 
 * @typedef {Object} users_t
 * 
 * @property {string} [name] - The name of the user (optional).
 * @property {string} email - The email address of the user (required).
 * @property {string} password - The password for the user (required).
 * @property {string} [contact] - The contact number of the user (optional).
 * @property {string} [address] - The address of the user (optional).
 * @property {number} [age] - The age of the user (optional).
 */
export type users_t = {
    _id?: string;
    name?: string;
    email: string;
    password: string;
    contact?: string;
    address?: string;
    age?: number;
    imagepath?: string;
};
