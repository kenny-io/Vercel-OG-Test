import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dynamic OG Generation</title>
        <meta
          name="description"
          property="og:image"
          content="https://dynamic-ogs.vercel.app/api/get-og"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my site</h1>

        <div className={styles.grid}>
          <Link href="/blog/post1">
            <a className={styles.card}>
              <h2>Post 1 &rarr;</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, saepe numquam autem aperiam fugit
              </p>
            </a>
          </Link>
          <Link href="/blog/post2">
            <a className={styles.card}>
              <h2>Post 2 &rarr;</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                doloribus iusto qui corporis totam
              </p>
            </a>
          </Link>

          <Link href="/blog/post3">
            <a className={styles.card}>
              <h2>Post 3 &rarr;</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                doloribus iusto qui corporis totam
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
