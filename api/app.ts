import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.route';
import metadataRouter from './routes/metadata.route';
import guardianRoute from './routes/guardian.route';

const app = express();

/**
 * Middleware to parse incoming JSON requests.
 */
app.use(express.json());

/**
 * Middleware for Cross-Origin Resource Sharing (CORS).
 */
app.use(cors());

/**
 * User Routes
 */
app.use('/api/user', userRouter);
app.use('/api/metadata', metadataRouter);
app.use('/api/guardians', guardianRoute);

export default app;
