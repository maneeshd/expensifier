import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FONT_INTER } from '../utils/fonts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${FONT_INTER.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
