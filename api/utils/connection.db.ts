import mongoose from 'mongoose';

/**
 * Establishes a connection to a MongoDB database using Mongoose.
 *
 * @param {string} conn_string - The connection string used to connect to the MongoDB database.
 * @param {string} message - A success message that will be logged when the connection is successful.
 *
 * @returns {void} - This function doesn't return anything.
 */
const connection = (conn_string: string, message: string): void => {
    mongoose.connect(conn_string as string)
        .then(() => {
            console.log(message);
        })
        .catch(err => {
            console.error('Error while connecting to DB', err);
        });
};

export default connection;
