import { Schema, model, models } from 'mongoose'

export const enrollmentSessionSchema = new Schema(
  {
    sessionId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    status: {
      type: String,
      enum: ['waiting', 'enrolled', 'expired'],
      default: 'waiting'
    },
    expiresAt: { type: Date, required: true }
  },
  {
    timestamps: true
  }
)

export default models.EnrollmentSession ||
  model('EnrollmentSession', enrollmentSessionSchema)
