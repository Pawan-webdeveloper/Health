import { Shield, Database, Share2, Hospital, User, Lock, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F0F8FF]">
      <header className="px-4 lg:px-6 h-20 flex items-center justify-between border-b bg-white shadow-sm sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3 font-semibold group">
          <Shield className="h-7 w-7 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
          <span className="text-blue-800 text-2xl group-hover:text-blue-600 transition-colors duration-200">HealthChain</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <a className=" text-blue-800 hover:text-blue-600 transition-colors duration-200 relative group font-semibold text-lg"  href="#features">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </a>
          <a className=" text-blue-800 hover:text-blue-600 transition-colors duration-200 relative group font-semibold text-lg" href="#how-it-works">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </a>
          <a className=" text-blue-800 hover:text-blue-600 transition-colors duration-200 relative group font-semibold text-lg" href="#for-hospitals">
            For Hospitals
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </a>
          <a className=" text-blue-800 hover:text-blue-600 transition-colors duration-200 relative group font-semibold text-lg" href="#for-patients">
            For Patients
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </a>
        </nav>
        <div className="flex gap-4">
          <Link to="/login">
            <Button variant="outline" size="lg" className="border-blue-500 text-blue-700 hover:bg-blue-50 hover:border-blue-600 transition-colors duration-200 text-base px-6 rounded-xl p-6">
              Sign Up
            </Button>
          </Link>
          <Link to="/hospital-login" className="hidden md:block">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-600 transition-colors duration-200  px-6 text-white font-semibold text-lg rounded-xl p-6">
              Log in as Hospital
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-10 md:py-24 lg:py-32 xl:py-25 bg-gradient-to-b from-blue-50 to-blue-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-6xl xl:text-6xl/none">
                    Secure Health Credentials on the Blockchain
                  </h1>
                  <p className="max-w-[600px] text-grey-700 text-md md:text-2xl">
                    Store, access, and share your health credentials securely using blockchain technology.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row mt-8">
                  <Link className="/hospital-login" to="/hospital-login">
                    <Button size="lg" className="gap-1 bg-blue-600 hover:bg-blue-700 text-xl 
                    mt-4 text-white font-semibold rounded-xl p-7">
                      Get Started <ChevronRight className="h-4 w-4" />
                    </Button>
                    </Link>
                  <a href="#learn-more">
                    <Button size="lg" variant="outline" className="border-blue-500 text-blue-700 hover:bg-blue-50 mt-4 rounded-xl p-7 ml-4">
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
              <img
                src="/images/health-hero.jpeg"
                alt="Health data secured by blockchain"
                className="  overflow-hidden rounded-xl object-cover  mt-0 sm:w-full lg:order-last shadow-xl"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                
                <h2 className="text-4xl font-bold tracking-tighter text-black md:text-5xl">
                  Blockchain-Powered Health Credentials
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl">
                  Our platform leverages blockchain technology to provide secure, immutable, and accessible health
                  records.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-8 bg-white shadow-sm border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group h-[280px]">
                <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <Lock className="h-12 w-12 text-black group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black text-center">Secure Storage</h3>
                <p className="text-center text-grey-600 text-base ">
                  Your health credentials are encrypted and stored securely on the blockchain.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-8 bg-white shadow-sm border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group h-[280px]">
                <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <User className="h-12 w-12 text-black group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black text-center">User Control</h3>
                <p className="text-center text-grey-600 text-base">
                  You decide who can access your health data and for how long.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-8 bg-white shadow-sm border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group h-[280px]">
                <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <Share2 className="h-12 w-12 text-black group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black text-center">Easy Sharing</h3>
                <p className="text-center text-grey-600 text-base">
                  Share your health credentials with healthcare providers with just a few clicks.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-8 bg-white shadow-sm border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group h-[280px]">
                <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <Database className="h-12 w-12 text-black group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black text-center">Immutable Records</h3>
                <p className="text-center text-grey-600 text-base">
                  Blockchain ensures your health records cannot be altered or tampered with.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-8 bg-white shadow-sm border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group h-[280px]">
                <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <Hospital className="h-12 w-12 text-black group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black text-center">Hospital Integration</h3>
                <p className="text-center text-grey-600 text-base">
                  Seamless integration with hospital systems for credential issuance.
                </p>                
              </div>
              <div className="flex flex-col items-center space-y-4 border rounded-lg p-8 bg-white shadow-sm border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group h-[280px]">
                <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <Shield className="h-12 w-12 text-black group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black text-center">Privacy Focused</h3>
                <p className="text-center text-grey-600 text-base">
                  Your data is protected with advanced encryption and privacy controls.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter text-blue-900 md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-blue-700 md:text-xl">
                  Our platform makes it easy to store, access, and share your health credentials securely.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2">
              <img
                src="/images/works.jpeg"
                alt="How the platform works"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white p-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-800 text-lg">Hospital Issues Credentials</h3>
                      <p className="text-blue-600 text-base">
                        Healthcare providers issue verified health credentials to your wallet.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center p-4 justify-center rounded-full bg-blue-600 text-white">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-800 text-lg">Secure Storage on Blockchain</h3>
                      <p className="text-blue-600 text-base">
                        Your credentials are encrypted and stored securely on the blockchain.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 p-4 items-center justify-center rounded-full bg-blue-600 text-white">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-800">Access Via Wallet</h3>
                      <p className="text-blue-600 text-base">
                        Log in with your wallet to view and manage your health credentials.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 p-4 items-center justify-center rounded-full bg-blue-600 text-white">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-800 text-lg">Share When Needed</h3>
                      <p className="text-blue-600 text-base">
                        Securely share your credentials with healthcare providers as needed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="for-hospitals" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-lg text-white font-semibold mb-3">For Hospitals</div>
                  <h2 className="text-4xl font-bold tracking-tighter mb-6 text-blue-900 md:text-5xl">
                    Streamline Credential Management
                  </h2>
                  <p className="max-w-[600px] text-blue-700 text-lg md:text-2xl">
                    Simplify the process of issuing, verifying, and managing patient health credentials.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    <span className="text-blue-700 text-base">
                      Reduce administrative overhead with automated credential issuance
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    <span className="text-blue-700 text-base">Eliminate paper records and reduce storage costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    <span className="text-blue-700 text-base">Improve interoperability between healthcare systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    <span className="text-blue-700 text-base">Enhance security and compliance with regulatory requirements</span>
                  </li>
                </ul>
                <div>
                  <a href="#hospital-signup">
                    <Button size="lg" className="gap-1 bg-blue-600 hover:bg-blue-700 text-white p-7 rounded-xl text-lg mt-3">
                      Partner With Us <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
              <img
                src="/images/hospital.jpeg"
                alt="Hospital dashboard"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        <section id="for-patients" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="/images/patient.jpeg"
                alt="Patient mobile app"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-lg mb-2 font-semibold text-white ">For Patients</div>
                  <h2 className="text-4xl font-bold tracking-tighter text-blue-900 md:text-5xl">
                    Take Control of Your Health Data
                  </h2>
                  <p className="max-w-[600px] text-blue-700 text-lg md:text-2xl">
                    Access your health credentials anytime, anywhere, and share them securely with healthcare providers.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    <span className="text-blue-700 text-base">Store all your health credentials in one secure wallet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-700" />
                    <span className="text-blue-700 text-base">Control who can access your health data and for how long</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-800" />
                    <span className="text-blue-700 text-base">
                      Share your credentials instantly with new healthcare providers
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    <span className="text-blue-700 text-base">Access your health records even when changing providers</span>
                  </li>
                </ul>
                <div>
                  <a href="#patient-signup">
                    <Button size="lg" className="gap-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-7 mt-4 text-lg">
                      Create Your Wallet <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">
                  Ready to Transform Health Credential Management?
                </h2>
                <p className="max-w-[900px] md:text-xl">
                  Join thousands of hospitals and patients already using our platform to securely manage health
                  credentials.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="#signup">
                  <Button size="lg" variant="secondary" className="gap-1 bg-white text-blue-700 hover:bg-blue-50">
                    Get Started <ChevronRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                    Contact Hospital
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          <span className="font-semibold text-blue-800">HealthChain</span>
        </div>
        <p className="text-xs text-blue-600 sm:ml-4">
          &copy; {new Date().getFullYear()} HealthChain Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs text-blue-700 hover:underline underline-offset-4" href="#">
            Privacy Policy
          </a>
          <a className="text-xs text-blue-700 hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs text-blue-700 hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default Home