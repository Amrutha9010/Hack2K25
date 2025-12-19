import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Hospital from './src/models/Hospital.model.js';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('[DB] Connected.');
    } catch (err) {
        console.error('Connection error', err);
        process.exit(1);
    }
};

const check = async () => {
    await connectDB();
    const hospitals = await Hospital.find({});
    console.log('--- HOSPITALS DATA ---');
    console.log(JSON.stringify(hospitals, null, 2));
    console.log('--- END ---');
    process.exit(0);
};

check();
