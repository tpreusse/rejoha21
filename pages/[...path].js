import Link from "next/link";
import { useRouter } from "next/router";
import { timeFormat } from "d3-time-format";

import Frame from "../components/Frame";
import styles from "../styles/Main.module.css";
import getDoc from "../data/getDoc";
import { ArticleIcon } from "../components/ArticleIcon/ArticleIcon";

const publishDateFormat = timeFormat("%d.%m.%Y");

function Card({ doc }) {
  return (
    <Link href={doc.url.replace("https://www.republik.ch", "")}>
      <a className={styles.linkedArticleContainer}>
        <div className={styles.icon}>
          <ArticleIcon
            textlength={doc.readingMinutes}
            linksin={doc.internalLinkCountIn || 0}
            linksout={doc.internalLinkCountOut || doc.internalLinkCount || 0}
            linktype="triangles"
          />
        </div>
        <div className={styles.articleData}>
          <div className={styles.date}>{publishDateFormat(new Date(doc.publishDate))}</div>
          <div className={styles.headline}>{doc.title}</div>
        </div>
      </a>
    </Link>
  );
}

export default function Detail({ doc, internalLinks, documents }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Frame pageTitle="Lädt…">
        <p className={styles.description}>Lädt…</p>
      </Frame>
    );
  }
  if (!doc) {
    return (
      <Frame pageTitle="Nicht verfügbar">
        <p className={styles.description}>Das Dokument ist nicht verfügbar.</p>
      </Frame>
    );
  }

  const inLinks = internalLinks
    .filter(link => link.target === doc.id)
    .filter((link, index, all) => index === all.findIndex(d => d.source === link.source));
  const outLinks = internalLinks
    .filter(link => link.source === doc.id)
    .filter((link, index, all) => index === all.findIndex(d => d.target === link.target));

  return (
    <Frame pageTitle={`${doc.title} – Rehoja21 Content Exploration`}>
      <main className={styles.main} style={{ paddingBottom: 0 }}>
        <Link href="/">
          <a>
            <h2>&larr; Themen­stränge</h2>
          </a>
        </Link>
        <div className={styles.grid}>
          {inLinks.map(link => {
            const linkedDoc = documents.find(d => d.id === link.source);
            if (!linkedDoc) {
              return null;
            }

            return <Card key={linkedDoc.id} doc={linkedDoc} />;
          })}
        </div>
      </main>
      <div className={styles.dark} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className={styles.arrowcontainer}>
          <div className={styles.arrowdown} />
        </div>
        <main className={styles.main}>
          <div className={styles.icon}>
            <ArticleIcon
              textlength={doc.readingMinutes}
              linksin={inLinks.length}
              linksout={outLinks.length}
              linktype="triangles"
              inverted
            />
          </div>
          <div className={styles.mainArticleData}>
            {publishDateFormat(new Date(doc.publishDate))}
            <h1 className={styles.title}>{doc.title}</h1>
            <p className={styles.description}>{doc.description}</p>
            <a href={doc.url} target="_blank">
              Beitrag lesen &#x2197;
            </a>
          </div>
        </main>
  
      </div>
      <div className={styles.arrowcontainerBottom}>
          <div className={styles.arrowdown2} />
        </div>
      <main className={styles.main} style={{ paddingTop: 0 }}>
        <div className={styles.grid}>
          {outLinks.map(link => {
            const linkedDoc = documents.find(d => d.id === link.target);
            if (!linkedDoc) {
              return null;
            }

            return <Card key={linkedDoc.id} doc={linkedDoc} />;
          })}
        </div>
      </main>
    </Frame>
  );
}

export async function getStaticProps({ params }) {
  const data = getDoc(params.path.join("/"));

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
