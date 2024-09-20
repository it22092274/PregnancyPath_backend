import app from "./app";
import connection from "./utils/connection.db";
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

/**
 * Establishes a connection to the MongoDB database.
 */
connection(process.env.MONGODB_URI as string, 'MAIN DB CONNECTED');

/**
 * Starts the Express server and listens on the specified port.
 */
app.listen(process.env.PORT, () => {
    console.log('Server is up and running');
});
