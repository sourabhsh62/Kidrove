import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import enquiryRouter from './routes/enquiry.js';
const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kidrove';
app.use(cors());
app.use(express.json());
app.use('/api/enquiry', enquiryRouter);
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
async function start() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.warn('MongoDB not available, using in-memory fallback');
        console.warn(err);
    }
    app.listen(PORT, () => {
            const viteUrl = process.env.VITE_URL || `http://localhost:${PORT}`
    console.log(`Server running on ${viteUrl}`)
    });
}
start();
