import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // <--- ESSA LINHA É OBRIGATÓRIA PARA O TAILWIND FUNCIONAR
import App from './App'
import { ThemeProviderCustom } from './contexts/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderCustom>
      <App toggleTheme={() => {}} isDark={true} />
    </ThemeProviderCustom>
  </React.StrictMode>
)
