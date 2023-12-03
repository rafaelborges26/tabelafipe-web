import type { AppProps } from 'next/app'
import { CarsProvider } from '@/contexts/carsContext'
import GlobalStyle from '../styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
    <CarsProvider>
      <Component {...pageProps} />
    </CarsProvider>
    </>
  )
}
