import { Navbar } from '@/components/layout/Navbar'
import Hero from '@/components/section/Hero'
import Features from '@/components/section/Features'

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Navbar />
      <Hero />
      <Features />
    </main>
  )
}
