import mongoose, { Schema, Document } from 'mongoose'

export interface IEnquiry extends Document {
  name: string
  email: string
  phone: string
  createdAt: Date
}

const EnquirySchema = new Schema<IEnquiry>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
  },
  { timestamps: true }
)

export default mongoose.model<IEnquiry>('Enquiry', EnquirySchema)
