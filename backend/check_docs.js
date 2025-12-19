import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Doctor from './src/models/Doctor.model.js';

dotenv.config();

const checkDoctors = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB');
        
        const count = await Doctor.countDocuments();
        console.log(`Total Doctors: ${count}`);
        
        if (count > 0) {
            const docs = await Doctor.find({});
            console.log('Sample Doctor:', JSON.stringify(docs[0], null, 2));
            
            // Check for Bhimavaram doctors specifically
            const bhimavaramDocs = await Doctor.find({ city: 'bhimavaram' });
            console.log(`Doctors in Bhimavaram: ${bhimavaramDocs.length}`);
        }
        
        process.exit();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

checkDoctors();
