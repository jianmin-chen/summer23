import '@/styles/globals.scss'
import {
  Lora,
  EB_Garamond,
  Inter,
  IBM_Plex_Sans,
  Anonymous_Pro
} from 'next/font/google'
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

const anonymousPro = Anonymous_Pro({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-mono'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
        <meta property="og:site_name" content="summer of 23" />
        <meta property="og:image" content="https://summer23.me/meta.webp" />
        <meta property="og:title" content="summer of 23" />
        <meta
          property="og:description"
          content="just recapping a life-changing summer"
        />
        <meta property="og:type" content="site" />
        <meta itemProp="name" content="summer of 23" />
        <meta
          itemProp="description"
          content="just recapping a life-changing summer"
        />
        <meta name="twitter:title" content="summer of 23" />
        <meta
          name="twitter:description"
          content="just recapping a life-changing summer"
        />
        <meta itemProp="image" content="https://summer23.me/meta.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://summer23.me/meta.webp" />
        <meta name="apple-mobile-web-app-title" content="summer of 23" />
        <title>summer of 23</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌴</text></svg>"
        />
      </Head>
      <img src="/paper.png" style={{ display: 'none' }} />
      <main
        className={`${anonymousPro.variable} ${ibmPlexSans.variable} ${lora.variable} ${ebGaramond.variable} ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
