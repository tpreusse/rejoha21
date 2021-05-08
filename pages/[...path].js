import Link from "next/link";
import { useRouter } from "next/router";

import Frame from "../components/Frame";

import styles from "../styles/Main.module.css";

import getDoc from "../data/doc";

import { ArticleIcon } from "../components/ArticleIcon/ArticleIcon";

export default function Detail({ doc }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Frame pageTitle="Lädt…">
        <p className={styles.description}>Lädt…</p>
      </Frame>
    );
  }

  return (
    <Frame pageTitle={`${doc.title} – Rehoja21 Content Exploration`}>
      <Link href="/">
        <a>
          <h2>&larr; Übersicht</h2>
        </a>
      </Link>
      <div className={styles.linkedArticleContainer}>
        <div className={styles.icon}>
          <ArticleIcon textlength={40} linksin={15} linksout={2} linktype={"triangles"} />
        </div>
        <div className={styles.articleData}>
        <div className={styles.date}>23.07.2019</div>
        <div className={styles.headline}>Wenn man auf dem Weg dreimal hinfällt und dann liegen bleibt.</div>
        </div>

      </div>
      <h1 className={styles.title}>{doc.title}</h1>
      <p className={styles.description}>{doc.description}</p>
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
