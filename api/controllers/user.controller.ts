import { Response, Request } from 'express';
import { addUser, readUserByEmail, editUser, deleteUser } from '../services/user.service';
import { comparePassword } from '../utils/compare.token';
import { createToken } from '../utils/create.token';
import { hashPassword } from '../utils/hashpassword';
import dotenv from 'dotenv';
import User from '../models/user.model';

dotenv.config();

/**
 * Handles user login and generates a JWT token upon successful authentication.
 */
export const login = async (request: Request, response: Response): Promise<Response> => {
    try {
        const { email, password } = request.body;

        // Fetch the user by email
        const user= await readUserByEmail(email);
        if (!user) return response.status(400).json({ message: 'User not found' });

        // Compare the provided password with the stored hashed password
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) return response.status(400).json({ message: 'Incorrect credentials' });

        // Generate JWT token
        const jwtSecret = process.env.JWT_SECRET || 'defaultSecretKey'; // Add a fallback value for the secret key
        const token = createToken(user._id as string, jwtSecret, '1h');
        return response.status(200).json({ token, message: 'Login successful' });
    } catch (error: any) {
        return response.status(500).json({ message: 'An error occurred during login', error: error.message });
    }
};

export const forgotPassword = async (request:Request, response: Response) => {
    const { id } = request.params
    let { password } = request.body

    password = await hashPassword(password)

    try{
        const updatedUser = await User.findByIdAndUpdate(
            id,
            password,
            {new : true}
        )
        if ( !updatedUser) return response.status(404).json({message: 'user not found'})

        return response.status(200).json({message: 'password changed successfully', data: updatedUser})
    }catch(error){
        console.error(error)
        return response.status(500).json({message: 'error changing password'})
    }
    
}

/**
 * Handles user signup and creates a new user account.
 */
export const signup = async (request: Request, response: Response): Promise<Response> => {
    try {
        let { email, password } = request.body;
        password = await hashPassword(password);
        const userData = { email, password };

        // Add the new user to the database
        const user = await addUser(userData);
        if (!user) return response.status(500).json({ message: 'Error creating account' });

        return response.status(200).json({ message: 'Signup successful' });
    } catch (error: any) {
        return response.status(500).json({ message: 'An error occurred during signup', error: error.message });
    }
};

/**
 * Retrieves the user profile based on the email provided.
 */
export const getProfile = async (request: Request, response: Response): Promise<Response> => {
    try {
        const { email } = request.body;
        const user = await readUserByEmail(email);
        if (!user) return response.status(404).json({ message: 'User not found' });

        return response.status(200).json(user);
    } catch (error: any) {
        return response.status(500).json({ message: 'An error occurred during profile retrieval', error: error.message });
    }
};

/**
 * Updates the user profile.
 */
export const editProfile = async (request: Request, response: Response): Promise<Response> => {
    try {
        const userId = request.params.id;
        const { name, email, contact, address, age } = request.body;

        const updatedUser = await editUser(request.body, userId);
        if (!updatedUser) return response.status(500).json({ message: 'Error updating profile' });

        return response.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error: any) {
        return response.status(500).json({ message: 'An error occurred during profile update', error: error.message });
    }
};

/**
 * Deletes a user profile.
 */
export const deleteProfile = async (request: Request, response: Response): Promise<Response> => {
    try {
        const userId = request.params.id;

        // Delete the user from the database
        const deletedUser = await deleteUser(userId);
        if (!deletedUser) return response.status(404).json({ message: 'User not found' });

        return response.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error: any) {
        return response.status(500).json({ message: 'An error occurred during profile deletion', error: error.message });
    }
};
