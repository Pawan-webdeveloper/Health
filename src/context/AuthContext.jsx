import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

// Hardcoded credentials for demonstration
const HOSPITAL_CREDENTIALS = {
  email: "example@gmail.com",
  password: "12345678"
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    // Check if credentials match
    if (email === HOSPITAL_CREDENTIALS.email && password === HOSPITAL_CREDENTIALS.password) {
      setUser({ email, role: 'hospital' })
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 