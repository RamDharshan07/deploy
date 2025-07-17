'use client'

import { SessionProvider } from 'next-auth/react'

export default function SessionWrap({ children }) {
  return <SessionProvider>{children}</SessionProvider>
  
} 