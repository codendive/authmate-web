import { Schema, model, models } from 'mongoose'

const passSchema = new Schema(
  {
    userId: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    imageUrl: String,
    isRevoked: { type: Boolean, default: false },
    expireDate: Date
  },
  { timestamps: true }
)

export default models.Pass || model('Pass', passSchema)
