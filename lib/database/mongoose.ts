import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn:Mongoose | null;
    promise:Promise<Mongoose> | null;
}

let cached:MongooseConnection = (global as any).mongoose;

if(!cached) {
    cached = (global as any).mongoose = { 
        conn: null, 
        promise: null 
    };
}

// 如果缓存conn连接存在，则返回缓存，连接并推出
export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;
}