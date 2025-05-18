import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import connectDB from '@/config/database'
import EnrollmentSession from '@/app/models/enrollmentSession'

export const POST = async (req: Request) => {
  await connectDB()

  const { userId } = await req.json()

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 })
  }

  const sessionId = uuidv4()
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000)

  await EnrollmentSession.create({
    sessionId,
    userId,
    expiresAt
  })

  return NextResponse.json({ sessionId, expiresAt })
}
