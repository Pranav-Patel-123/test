import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Properly type `cached` and use `const`
const globalWithMongoose = global as typeof global & {
  mongoose?: { conn: mongoose.Connection | null; promise: Promise<mongoose.Connection> | null };
};

const cached = globalWithMongoose.mongoose || (globalWithMongoose.mongoose = { conn: null, promise: null });

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "nextauth",
      bufferCommands: false,
    }).then((mongoose) => mongoose.connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
