import { Router } from 'express';
import Enquiry from '../models/Enquiry.js';
const router = Router();
router.post('/', async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const errors = [];
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
            errors.push('Name is required and must be at least 2 characters');
        }
        if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push('A valid email address is required');
        }
        if (!phone || typeof phone !== 'string' || !/^[+]?[\d\s-]{10,15}$/.test(phone.replace(/\s/g, ''))) {
            errors.push('A valid phone number is required');
        }
        if (errors.length > 0) {
            res.status(400).json({ error: 'Validation failed', details: errors });
            return;
        }
        const enquiry = new Enquiry({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
        });
        await enquiry.save();
        res.status(201).json({
            message: 'Enquiry submitted successfully',
            data: {
                id: enquiry._id,
                name: enquiry.name,
                email: enquiry.email,
                phone: enquiry.phone,
            },
        });
    }
    catch (err) {
        console.error('Enquiry submission error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
export default router;
