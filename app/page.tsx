'use client'

/**
 * Import: Components
 */
import { PageTitle } from '@/lib/components/molecula/PageTitle'
import { WelcomeSection } from '@/lib/components/molecula/WelcomeSection'
import { BASE_URL } from '@/network'
import { useEffect } from 'react'

export default function Home() {
  const getData = async () => {
    const response = await fetch(`${BASE_URL}/api/test`)
    console.log('response', response)
    const result = await response.json()
    console.log('result', result)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <PageTitle />
      <WelcomeSection />
    </>
  )
}
