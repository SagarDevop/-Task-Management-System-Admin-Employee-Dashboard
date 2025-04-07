import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/Localstorage'

export const AuthContext = createContext()


function Authprovider({children}) {
  const [userData, setUserData] = useState(null)

  const updateUserData = () => {
    const {employees, admin} = getLocalStorage()
    setUserData({employees, admin})
  }

  useEffect(() => {
    // Initial setup
    setLocalStorage()
    updateUserData()

    // Listen for storage changes
    const handleStorageChange = () => {
      updateUserData()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('localStorageUpdated', handleStorageChange)

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('localStorageUpdated', handleStorageChange)
    }
  }, [])

  // Show loading state while data is being fetched
  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default Authprovider
