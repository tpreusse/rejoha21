import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rehoja21 Content Exploration</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Themenstränge
        </h1>

        <p className={styles.description}>
          Ein Experiment an Hand von Republik Daten aus dem Jahr 2019.
        </p>

        <div className={styles.grid}>
          <Link href="/2019/09/24/erste-babyschritte-zur-klima-neutralitaet">
            <a className={styles.card}>
              <h2>Klima &rarr;</h2>
              <p>Wie klima­freundlich steht die Schweiz da? Der Klimapolitik-Report.</p>
            </a>
          </Link>

          <Link href="/2019/10/30/schmerz-sucht-und-profit">
            <a className={styles.card}>
              <h2>Drogen &rarr;</h2>
              <p>Die Opioidkrise in den USA. Wie gefährlich ist das Schmerz­mittel Oxycodon?</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Ein Projekt von {' '}
        <code className={styles.code}>Salome Erni</code>,{' '}
        <code className={styles.code}>Corina Mühle</code>,{' '}
        <code className={styles.code}>Sharon Funke</code>,{' '}
        <code className={styles.code}>Sebastian Broschinski</code> und {' '}
        <code className={styles.code}>Thomas Preusse</code>
      </footer>
    </div>
  )
}
