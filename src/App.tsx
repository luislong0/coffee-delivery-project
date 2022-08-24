import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CoffeeContextProvider } from './contexts/CoffeeContext'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <input type="checkbox"
        onChange={toggleTheme}
        checked={theme.title === 'dark'}

      /> */}
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
