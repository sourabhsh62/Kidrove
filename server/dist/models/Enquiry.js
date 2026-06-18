import mongoose, { Schema } from 'mongoose';
const EnquirySchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
}, { timestamps: true });
export default mongoose.model('Enquiry', EnquirySchema);
