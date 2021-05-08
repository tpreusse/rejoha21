import React from 'react'
import Head from 'next/head'
import styles from '../styles/Main.module.css'

export default function Frame({ pageTitle, children }) {
  return <div className={styles.container}>
    <Head>
      <title>{pageTitle}</title>
    </Head>

    <main className={styles.main}>
      {children}
    </main>

    <footer className={styles.footer}>
      Ein Projekt von {' '}
      <a>Salome&nbsp;Erni</a>,{' '}
      <a>Corina&nbsp;Mühle</a>,{' '}
      <a>Sharon&nbsp;Funke</a>,{' '}
      <a>Sebastian&nbsp;Broschinski</a> und {' '}
      <a>Thomas&nbsp;Preusse</a>
    </footer>
  </div>
}
