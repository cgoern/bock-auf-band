import Head from 'next/head'
import Link from 'next/link'
import Paragraph from './components/paragraph'
import Button from './components/button'
import Glyphs from './components/glyphs'
import Box from './components/box'
import styles from './index.module.css'
import coverImage from '../public/cover.png'

export default function Index() {
  return (
    <div className={styles.frame}>
      <Head>
        <title>Bock auf Band?</title>
        <meta property="og:title" content="Bock auf Band?" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bock-auf-band.vercel.app" />
        <meta property="og:image" content={coverImage.src} />
        <meta name="twitter:image" content={coverImage.src} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            href="mailto:bock-auf-band@fastmail.net"
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
  )
}
