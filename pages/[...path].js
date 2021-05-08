import Link from "next/link";
import { useRouter } from "next/router";

import Frame from "../components/Frame";

import styles from "../styles/Main.module.css";

import getDoc from "../data/doc";

import { ArticleIcon } from "../components/ArticleIcon/ArticleIcon";

export default function Detail({ doc, internalLinks, documents }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Frame pageTitle="Lädt…">
        <p className={styles.description}>Lädt…</p>
      </Frame>
    );
  }

  const inLinks = internalLinks.filter((link) => link.target === doc.id);
  const outLinks = internalLinks.filter((link) => link.source === doc.id);

  return (
    <Frame pageTitle={`${doc.title} – Rehoja21 Content Exploration`}>
      <Link href="/">
        <a>
          <h2>&larr; Themen­stränge</h2>
        </a>
      </Link>
      <div className={styles.grid}>
        {inLinks.map(link => {
          const linkedDoc = documents.find(d => d.id === link.source)

          return (
            <div key={linkedDoc.id} className={styles.linkedArticleContainer}>
              <div className={styles.icon}>
                <ArticleIcon
                  textlength={linkedDoc.readingMinutes}
                  linksin={linkedDoc.internalLinkCountIn || 0}
                  linksout={linkedDoc.internalLinkCountOut || 0}
                  linktype='triangles'
                />
              </div>
              <div className={styles.articleData}>
                <div className={styles.date}>23.07.2019</div>
                <div className={styles.headline}>
                  {linkedDoc.title}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className={styles.icon}>
        <ArticleIcon
          textlength={doc.readingMinutes}
          linksin={inLinks.length}
          linksout={outLinks.length}
          linktype='triangles'
        />
      </div>
      <h1 className={styles.title}>{doc.title}</h1>
      <p className={styles.description}>{doc.description}</p>
      <a href={doc.url} target='_blank'>Beitrag lesen</a>

      <div className={styles.grid}>
        {outLinks.map(link => {
          const linkedDoc = documents.find(d => d.id === link.target)

          return (
            <div key={linkedDoc.id} className={styles.linkedArticleContainer}>
              <div className={styles.icon}>
                <ArticleIcon
                  textlength={linkedDoc.readingMinutes}
                  linksin={linkedDoc.internalLinkCountIn || 0}
                  linksout={linkedDoc.internalLinkCountOut || 0}
                  linktype='triangles'
                />
              </div>
              <div className={styles.articleData}>
                <div className={styles.date}>23.07.2019</div>
                <div className={styles.headline}>
                  {linkedDoc.title}
                </div>
              </div>
            </div>
          )
        })}
      </div>
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
