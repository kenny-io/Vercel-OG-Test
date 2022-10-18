import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Post 2</title>
        <meta
          name="description"
          property="og:image"
          content="https://dynamic-ogs.vercel.app/api/og?title=Learning Algorithms"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to blog post 2</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          dignissimos odio iusto porro at tempore sed nemo aliquid consequuntur
          maxime ad fugiat dolore commodi similique, excepturi laudantium
          dolorem. Dolor, ducimus.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum
          alias nisi quos deserunt tempore at nulla ex laboriosam, voluptatum
          vero hic sunt pariatur, eius, id itaque fugiat dolores incidunt.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
