import type { AppProps } from 'next/app'
import { GlobalStyles } from '../src/themes/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../src/themes/themes'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={ light } >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
