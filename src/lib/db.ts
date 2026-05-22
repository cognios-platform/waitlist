import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalForMongoose = globalThis as unknown as MongooseCache;

export async function connectDb(): Promise<typeof mongoose> {
  if (!MONGODB_URI) {
    throw new Error("Please set MONGODB_URI in your environment.");
  }
  if (globalForMongoose.conn) return globalForMongoose.conn;
  if (globalForMongoose.promise) return globalForMongoose.promise;
  const promise = mongoose.connect(MONGODB_URI);
  globalForMongoose.promise = promise;
  globalForMongoose.conn = await promise;
  return globalForMongoose.conn;
}
