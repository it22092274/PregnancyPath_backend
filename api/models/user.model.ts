import mongoose, { Schema, model } from 'mongoose';
import { users_t } from '../types/user.type';

/**
 * Mongoose schema for user data.
 */
const userSchema: Schema<users_t> = new Schema({
    name: {
        type: String,
        default: 'new user',
    },
    age: {
        type: Number,
        min: 16,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contact: {
        type: String,
        default: '077-xxxx-xxx',
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    imagepath: {
        type: String,
        required: true,
        default: "https://picsum.photos/200/300",
    },
});

const User = model<users_t>('User', userSchema);

export default User;
