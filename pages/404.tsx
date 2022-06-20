import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import styles from "../styles/pages/Error.module.scss";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <h1 className={styles.title}>Error: 404</h1>
      <h2 className={styles.subtitle}>This page was not found &#128528;</h2>
    </div>
  );
};

export default Error;
