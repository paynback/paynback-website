import React from 'react'
import Header from '../components/Header'
import Hero from '../sections/Hero'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'

export default function Home() {
  return (
    <main className='w-full h-screen bg-background px-24'>
        <Header />
        <Hero />
    </main>
  )
}
