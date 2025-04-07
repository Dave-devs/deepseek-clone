import Hero from '@/components/section/Hero'
import Features from '@/components/section/Features'
import GetStarted from '@/components/section/GetStarted'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Hero />
      <Features />
      <GetStarted />
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  )
}
