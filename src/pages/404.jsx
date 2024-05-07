import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/404.module.scss";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div className={styles.NotFound}>
        <div className={styles["error-wrapper"]}>
          <div className={styles["img-wrapper"]}>
            <h1 className={styles["error-number"]}>404</h1>
            <Image
              className={styles["cloud-img"]}
              src="/images/cloud.png"
              alt="cloud"
              height={216}
              width={400}
              quality={80}
            />
          </div>
          <div className={styles["error-text-wrapper"]}>
            <h4 className={styles["error-text"]}>Page not found</h4>
            <p>The page you were looking for does not exist.</p>
          </div>
          <Link href="/">
            <button className={styles["goback-btn"]}>
              GO BACK TO HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
