import Head from 'next/head'
import Paragraph from './components/paragraph'
import Button from './components/button'
import Glyphs from './components/glyphs'
import styles from './index.module.css'

export default function Index() {
  return (
    <div className={styles.frame}>
      <Head>
        <title>Bock auf Band?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.box}>
        <div className={styles.body}>
          <Paragraph>
            <strong>Rhythmus-Duo (Schlagzeug/Bass)</strong> mit reichlich
            Studio- und Live-Erfahrung sucht Gitarristen/Sänger (am liebsten in
            einer Person) für ein neues Projekt in Berlin. Genre wäre von Rock
            bis Punk alles denkbar. Alter oder ähnliches ist erstmal egal, wir
            sind für alles offen.
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
          />
          <Button
            title="Kein Bock auf Band"
            label="Kein Bock"
            href="#"
            theme="secondary"
          />
        </div>
      </div>
      <Glyphs />
    </div>
  )
}