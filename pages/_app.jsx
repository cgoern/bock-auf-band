import Head from 'next/head'
import coverImage from '../public/cover.jpg'
import './../styles/globals.css'

function BockAufBandApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bock auf Band?</title>
        <meta property="og:title" content="Bock auf Band?" />
        <meta
          property="og:description"
          content="Berliner Rhythmus-Duo sucht Gitarristen/Sänger."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bock-auf-band.vercel.app" />
        <meta
          property="og:image"
          content={`https://bock-auf-band.vercel.app/${coverImage.src}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:image"
          content={`https://bock-auf-band.vercel.app/${coverImage.src}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default BockAufBandApp
