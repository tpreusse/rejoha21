import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

import getDoc from '../data/doc'

export default function Detail({ doc }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>Loading...</p>
      </main>
    </div>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{doc.title} – Rehoja21 Content Exploration</title>
      </Head>
      
      <main className={styles.main}>
        <Link href="/">
          <a>
            <h2>&larr; Übersicht</h2>
          </a>
        </Link>
        <h1 className={styles.title}>
          {doc.title}
        </h1>
        <p className={styles.description}>
          {doc.description}
        </p>
      </main>

      <footer className={styles.footer}>
        Ein Projekt von {' '}
        <code className={styles.code}>Salome Ernie</code>,{' '}
        <code className={styles.code}>Corina Mühle</code>,{' '}
        <code className={styles.code}>Sharon Funke</code>,{' '}
        <code className={styles.code}>Sebastian Broschinski</code> und {' '}
        <code className={styles.code}>Thomas Preusse</code>
      </footer>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = getDoc(params.path.join('/'))

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      ...data
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}
