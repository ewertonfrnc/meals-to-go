import { useState, useEffect } from 'react'

import Navigation from './src/infrastructure/navigation'

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context'

import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

import { StatusBar as ExpoStatusBar } from 'expo-status-bar'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// Optionally import the services that you want to use
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAnuYz_EuTyhK-XE8pCic_8BWLHjFvaNao',
  authDomain: 'mealstogo-56fc7.firebaseapp.com',
  projectId: 'mealstogo-56fc7',
  storageBucket: 'mealstogo-56fc7.appspot.com',
  messagingSenderId: '733070182518',
  appId: '1:733070182518:web:7447944df263682cc8f757',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default function App() {
  const [oswaldLoaded] = useOswald({
      Oswald_400Regular,
    }),
    [latoLoaded] = useLato({
      Lato_400Regular,
    })

  if (!oswaldLoaded || !latoLoaded) return null

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>

      <ExpoStatusBar style='auto' />
    </ThemeProvider>
  )
}
