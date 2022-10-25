import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import Header from '@/components/main/Header'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div
        className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
        style={{ maxWidth: '1200px' }}
      >
        <main className="p-5 w-full flex-1 text-center">
          <Navbar />
          <Hero />
          <div className="sm:mt-20 space-y-12">
            <Skills />
            <Projects />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
