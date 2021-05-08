import Link from 'next/link'
import styles from '../styles/Main.module.css'
import Frame from '../components/Frame'
export default function Home() {
  return (
    <Frame pageTitle={'Rehoja21 Content Exploration'}>
      <h1 className={styles.title}>
          Themen&shy;stränge
        </h1>

        <p className={styles.description}>Ein Experiment an Hand von Republik Daten aus dem Jahr 2019.</p>

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
    </Frame>
  )
}
