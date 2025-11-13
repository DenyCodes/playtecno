import React, { createContext, useContext, useState, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeLight } from '../styles/themeLight'
import { themeDark } from '../styles/themeDark'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(
      'useThemeContext deve ser usado dentro de ThemeProviderCustom'
    )
  }
  return context
}

interface ProviderProps {
  children: ReactNode
}

export const ThemeProviderCustom: React.FC<ProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
