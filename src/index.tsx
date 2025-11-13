import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProviderCustom } from './contexts/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderCustom>
      <App toggleTheme={function (): void {
        throw new Error('Function not implemented.')
      } } isDark={true} />
    </ThemeProviderCustom>
  </React.StrictMode>
)
