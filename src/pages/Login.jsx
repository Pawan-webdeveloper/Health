import { Shield, ArrowLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F0F8FF]">
      <header className="px-4 lg:px-6 h-20 flex items-center justify-between border-b bg-white shadow-sm sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3 font-semibold group">
          <Shield className="h-7 w-7 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
          <span className="text-blue-800 text-2xl group-hover:text-blue-600 transition-colors duration-200">HealthChain</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-blue-900">
              Patient Login
            </h2>
            <p className="mt-2 text-center text-sm text-blue-600">
              Access your health credentials
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-900">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-blue-900">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-800">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login 