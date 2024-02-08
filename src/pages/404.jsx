import Head from "next/head";
import Link from "next/link";
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
            <img
              className={styles["cloud-img"]}
              src="https://s3-alpha-sig.figma.com/img/428d/0b5f/9dc6b7c13fffa8b269195cdce3977826?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EWPIYgoiIB~bW2HSuUboe9akvyaCGsDagCyObxbugZw06bUTEQ8NbDWQUbYYRJlyu7VjF6sIxIhQsaz7kl3yXvf34hCNL4eHDL34q0O0BpSuPx3S4vI9i1~~e7OuAq4xyMoAck1L76y9OGPKTJ7yy~DfgRrcLYGqzhT5SOu0UJ7PdPHAF9lg-Hfew8wPHW1mUGI~F0q2wrr9C3shYEDlxiH4xkAZBIvKzm1VfxZUPo08lRN0axiibHnylU-gKgcegSkUCtpLRExDrN7WLM02nu~5rZuXHt3Nph2X9km0nvv2KJl95EmFVJsqlQCpKLX2r5e1c2o01nGfKAG0OQofqg__"
              alt="cloud"
            />
          </div>
          <div className={styles["error-text"]}>
            <h4>Page not found</h4>
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
