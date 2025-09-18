import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import Header from '@/components/main/Header'
import type { NextPage } from 'next'

const Privacy: NextPage = () => {
  return (
    <>
      <Header />
      <div
        className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
        style={{ maxWidth: '1200px' }}
      >
        <main className="p-5 w-full flex-1">
          <Navbar />
          <div className="mt-20 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
            <div className="text-left space-y-6 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Data Collection</h2>
                <p>
                  MercaChef app does not collect, store, or process any personal data from its visitors.
                  No cookies, tracking scripts, or analytics tools are used that would gather information about you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Information We Don&apos;t Collect</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal identifying information (name, email, address, phone number)</li>
                  <li>Technical information (IP address, browser type, device information)</li>
                  <li>Usage data (pages visited, time spent, click behavior)</li>
                  <li>Location data</li>
                  <li>Cookies or local storage data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Services</h2>
                <p>
                  This website does not integrate with any third-party services that would collect data on our behalf.
                  All content is served directly from our servers without external tracking or analytics.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
                <p>
                  If you have any questions about this privacy policy, you can contact us through the information
                  provided on this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Policy</h2>
                <p>
                  This privacy policy may be updated from time to time. Any changes will be posted on this page
                  with an updated revision date.
                </p>
              </section>

              <p className="text-sm text-gray-400 mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Privacy