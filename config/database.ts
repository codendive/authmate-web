import mongoose from 'mongoose'

const connectDB = async () => {
  mongoose.set('strictQuery', true)

  if (mongoose.connection.readyState >= 1) {
    console.log('✅ Already connected to MongoDB')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log('✅ Connected to MongoDB')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    throw error
  }
}

export default connectDB
