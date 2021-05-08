import Link from 'next/link'
import styles from '../styles/Main.module.css'
import Frame from '../components/Frame'

export default function Home() {
  return (
    <Frame pageTitle={'Rehoja21 Content Exploration'}>
      <h1 className={styles.title}>
          Themen&shy;stränge
        </h1>

        <p className={styles.description}>
          Ein Experiment an Hand von Republik Beiträgen welche zwischen dem 1.&nbsp;Juli&nbsp;2019 und dem 31.&nbsp;Oktober&nbsp;2019 publiziert wurden.
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
          <Link href="/2019/09/24/britische-politiker-verhalten-sich-nicht-wie-erwachsene">
            <a className={styles.card}>
              <h2>Brexit &rarr;</h2>
              <p>«Britische Politiker verhalten sich nicht wie Erwachsene»</p>
            </a>
          </Link>
          <Link href="/2019/07/29/die-angst-vor-fluechtlingen-entschaedigen-das-ist-liberale-migrationspolitik">
            <a className={styles.card}>
              <h2>Migrationspolitik &rarr;</h2>
              <p>Die Angst vor Flüchtlingen entschädigen – ist das liberal?</p>
            </a>
          </Link>
        </div>
    </Frame>
  )
}
