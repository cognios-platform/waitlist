import mongoose from "mongoose";

export interface ICreator {
  email: string;
  category: string;
  link: string;
  consent: boolean;
  consent_timestamp: Date;
  created_at: Date;
}

const schema = new mongoose.Schema<ICreator>(
  {
    email: { type: String, required: true, lowercase: true, trim: true },
    category: { type: String, required: true },
    link: { type: String, trim: false },
    consent: { type: Boolean, required: true },
    consent_timestamp: { type: Date, required: true },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "creators" },
);

export default mongoose.models.Creator ||
  mongoose.model<ICreator>("Creator", schema);
