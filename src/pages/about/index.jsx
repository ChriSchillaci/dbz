import Head from "next/head";
import Link from "next/link";
import { languageIcons } from "@/mocks/languages-icons";
import Marquee from "react-fast-marquee";
import styles from "../../styles/About.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles["layout-bg-about-wrapper"]}>
        <img
          className={styles["layout-bg-about"]}
          src="https://s3-alpha-sig.figma.com/img/7086/482e/9bd4270feae9de9be1ceda77b9afe183?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMMTAV1fZjM3JhUlea-pDuTJ--EtvPP0U7JBYbHu7YNwz7Lx1bnO4Odec47Gm0gSyVx51Rs8qiyeHIufGbBDh-ykt1UuYjT7MYQVtVVgHtQ7bJDI8sz8VDQXqYEmT4XBLCmly0R6HmGMSz5ftstyWlP7mYy-rURh3ZsoJuMP7yTJY98lZ3zmEieWCsxfOWAQYdiKl2-LtoFphJK~qMPyJ5EvshRcjEJOpPUCFNMKlHDeR1GLQyGxzImzF6Vl~9vaWyGQmDoX~torbu6AhMGDBQJCruQSF84I4sViO01albBytl5tZpT8uLBL~FQC8sL46q9GcE1szyQXEUzyDjD3Ww__"
          alt=""
        />
      </div>
      <div className={styles.About}>
        <div className={styles["developer-img-wrapper"]}>
          <img
            className={styles["developer-img"]}
            src="/images/foto-profilo.jpg"
            alt="foto profilo"
          />
          <div className={styles["developer-info"]}>
            <p className={styles["developer-name"]}>Schillaci Christian</p>
            <p className={styles["developer-profession"]}>
              Front-end Developer
            </p>
          </div>
        </div>
        <section className={styles.intro}>
          <h1 className={styles["intro-title"]}>Who am I?</h1>
          <p>
            I am Schillaci Christian, and I began my journey into the world of
            programming in 2023.
            <br />
            <br />
            I've always been fascinated by computers and technology, therefore,
            I decided to start learning programming languages, and since then I
            haven't stopped. I started studying on my own by reading books,
            attending Udemy courses, and watching tutorials on Youtube in order
            to deepen my knowledge throughout the months. It's been a difficult
            journey at first, but thanks to my continuous commitment, I was able
            to overcome my difficulties and achieve good results that even I
            couldn't imagine.
            <br />
            <br />
            I have acquired knowledge in different programming languages, from
            HTML5 and CSS to Javascript and React, and I had the opportunity to
            put into practice my skills in various personal projects, including
            this one.
            <br />
            <br />I am delighted I achieved these results in less than a year,
            and I won't certainly stop learning. Let's see what the future has
            in store for me.
          </p>
        </section>
        <Marquee
          className={styles["languages-container"]}
          direction="left"
          gradient={true}
          gradientColor={"black"}
          autoFill={true}
        >
          {languageIcons.map((language, idx) => (
            <img
              className={styles["language-icon"]}
              src={language.link}
              alt={language.alt}
              key={idx}
            />
          ))}
        </Marquee>
        <section className={styles.intro}>
          <h1 className={styles["intro-title"]}>About the project</h1>
          <p className={styles["intro-api"]}>
            You can find the API I used in the following url:{" "}
            <Link href="https://web.dragonball-api.com/">
              https://web.dragonball-api.com/
            </Link>
            {" (Spanish only)"}
          </p>
          <p>These are the technologies I used during development:</p>
          <ul className={styles["intro-list"]}>
            <li>HTML5</li>
            <li>Sass</li>
            <li>Javascript</li>
            <li>Next.js</li>
          </ul>
          <p>The libraries:</p>
          <ul className={styles["intro-list"]}>
            <li>CSS modules</li>
            <li>Swiper</li>
            <li>React Fast Marquee</li>
            <li>React Icons</li>
          </ul>
        </section>
      </div>
    </>
  );
}
