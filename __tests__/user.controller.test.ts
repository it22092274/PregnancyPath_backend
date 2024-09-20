import request from 'supertest';
import app from '../api/app'; // Import your express app
import { addUser } from '../api/services/user.service';
import { hashPassword } from '../api/utils/hashpassword';

// Mock the services
jest.mock('../api/services/user.service');
jest.mock('../api/utils/hashpassword');

describe('User Controller - Signup', () => {
    const mockUser = {
        _id: 'mockUserId',
        email: 'test@example.com',
        password: 'hashedPassword',
    };

    // Test successful signup
    it('should create a new user and return success message', async () => {
        (hashPassword as jest.Mock).mockResolvedValue('hashedPassword');
        (addUser as jest.Mock).mockResolvedValue(mockUser);

        const response = await request(app)
            .post('/api/signup')
            .send({ email: 'test@example.com', password: 'password123' });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Signup successful');
    });

    // Test case when an error occurs while adding user (e.g., DB error)
    it('should return 500 if there is an error creating a user', async () => {
        (hashPassword as jest.Mock).mockResolvedValue('hashedPassword');
        (addUser as jest.Mock).mockRejectedValue(new Error('Database error'));

        const response = await request(app)
            .post('/api/signup')
            .send({ email: 'test@example.com', password: 'password123' });

        expect(response.status).toBe(500);
        expect(response.body.message).toBe('An error occurred during signup');
    });

    // Test case where an invalid payload is provided
    it('should return 400 if email or password is missing', async () => {
        const response = await request(app)
            .post('/api/signup')
            .send({ email: 'test@example.com' }); // No password provided

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Email and password are required');
    });

    // Test case when the email already exists (assumes addUser checks for duplicates)
    it('should return 500 if the email is already in use', async () => {
        (hashPassword as jest.Mock).mockResolvedValue('hashedPassword');
        (addUser as jest.Mock).mockResolvedValue(null); // Simulate duplicate user

        const response = await request(app)
            .post('/api/signup')
            .send({ email: 'test@example.com', password: 'password123' });

        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Error creating account');
    });
});
