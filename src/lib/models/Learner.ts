import mongoose from "mongoose";

export interface ILearner {
  email: string;
  category: string;
  consent: boolean;
  consent_timestamp: Date;
  created_at: Date;
}

const learnerSchema = new mongoose.Schema<ILearner>(
  {
    email: { type: String, required: true, lowercase: true, trim: true },
    category: { type: String, required: true },
    consent: { type: Boolean, required: true },
    consent_timestamp: { type: Date, required: true },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "learners" }
);

learnerSchema.index({ email: 1 }, { unique: true });

export default mongoose.models.Learner ||
  mongoose.model<ILearner>("Learner", learnerSchema);
