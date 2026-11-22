import React, { createContext, useContext, useState } from 'react'
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  // Start with the device theme; the header button can still override it.
  const systemScheme = useColorScheme()
  const [scheme, setScheme] = useState(systemScheme === 'dark' ? 'dark' : 'light')

  const toggleTheme = () => setScheme((s) => (s === 'dark' ? 'light' : 'dark'))
  const theme = Colors[scheme]

  return (
    <ThemeContext.Provider value={{ scheme, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}
