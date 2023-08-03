import '@/styles/globals.scss'
import { Lora, EB_Garamond, Inter, IBM_Plex_Sans } from 'next/font/google'
import Head from 'next/head'

const lora = Lora({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--serif'
})

const ebGaramond = EB_Garamond({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif'
})

const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans'
})

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>summer of 23</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌴</text></svg>"
        />
      </Head>
      <img src="/paper.png" style={{ display: 'none' }} />
      <main
        className={`${ibmPlexSans.variable} ${lora.variable} ${ebGaramond.variable} ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
