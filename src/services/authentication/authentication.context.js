import React, { useState, createContext, useRef } from 'react'

import {
  signOut,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth'

import { loginRequest } from './authentication.service'

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false),
    [user, setUser] = useState(null),
    [error, setError] = useState(null),
    auth = useRef(getAuth()).current

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr)
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  })

  const onLogin = (email, password) => {
    setIsLoading(true)
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u)
        setIsLoading(false)
      })
      .catch((e) => {
        setIsLoading(false)
        setError(e.toString())
      })
  }

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true)
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match')
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u)
        setIsLoading(false)
      })
      .catch((e) => {
        setIsLoading(false)
        setError(e.toString())
      })
  }

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null)
      setError(null)
    })
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
