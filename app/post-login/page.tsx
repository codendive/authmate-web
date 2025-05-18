'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const PostLoginPage = () => {
  const { user, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!isLoaded) return

    const role = user?.publicMetadata?.role

    if (role === 'admin') {
      router.replace('/admin/dashboard')
    } else {
      router.replace('/dashboard')
    }
  }, [isLoaded, user, router])

  return null
}
export default PostLoginPage
