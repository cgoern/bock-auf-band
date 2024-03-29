import Link from 'next/link'
import Head from 'next/head'
import Paragraph from './components/paragraph'
import Button from './components/button'
import Glyphs from './components/glyphs'
import coverImage from '../public/cover.jpg'
import Box from './components/box'
import styles from './index.module.css'

export default function Index(props) {
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
        <meta property="og:url" content={props.baseUrl} />
        <meta property="og:image" content={props.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={props.ogImage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.frame}>
        <Box>
          <div className={styles.text}>
            <Paragraph>
              <strong>Berliner Rhythmus-Duo (Schlagzeug + Bass)</strong> mit
              reichlich Studio- und Live-Erfahrung sucht Gitarristen/Sänger (am
              liebsten in einer Person). Genre wäre von Rock bis Punk alles
              denkbar.
            </Paragraph>
            <Paragraph>
              Hörbeispiele von unserer letzten Band findet ihr hier:
            </Paragraph>
          </div>
          <div className={styles.links}>
            <Button
              title="Moving The Mess auf Spotify"
              label="Spotify"
              href="https://open.spotify.com/artist/0To86VMO9s3gxdnInte3N7"
              theme="spotify"
              icon="spotify"
              blank
            />
            <Button
              title="Moving The Mess auf YouTube"
              label="YouTube"
              href="https://www.youtube.com/channel/UCmH8z90aj7LyovfUmhq1mmA"
              theme="youtube"
              icon="youtube"
              blank
            />
          </div>
          <div className={styles.foot}>
            <Button
              title="E-Mail an Bock auf Band"
              label="Bock"
              href="mailto:bock_auf_band@fastmail.net?subject=Bock auf Band!"
              theme="primary"
              icon="thumb-up"
            />
            <Link href="/booh" passHref>
              <Button
                title="Kein Bock auf Band"
                label="Kein Bock"
                theme="secondary"
                icon="thumb-down"
              />
            </Link>
          </div>
        </Box>
        <Glyphs />
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
  const image = `${url}${coverImage.src}`

  return {
    props: { baseUrl: url, ogImage: image },
  }
}
