import Head from "next/head";
import { languageIcons } from "@/mocks/languages-icons";
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
            src="https://picsum.photos/220"
            alt=""
          />
          <p className={styles["developer-profession"]}>Front-end Developer</p>
        </div>
        <section className={styles.intro}>
          <h1 className={styles["intro__title"]}>Who am I?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            minus rem labore autem commodi optio odit distinctio fugiat
            similique repellat alias, corrupti deleniti maxime sed, sunt nam
            officia consectetur. Rem, eum modi rerum accusamus itaque
            recusandae. Nam molestiae eveniet eius inventore reiciendis esse
            quo, consequuntur architecto temporibus tenetur et, aspernatur eos!
            Aliquam excepturi quidem commodi nesciunt a quibusdam eos
            necessitatibus obcaecati facere reprehenderit laudantium praesentium
            possimus quo inventore temporibus, fugit blanditiis molestiae eum
            nemo magni adipisci consectetur nulla error cumque. Adipisci officia
            tenetur corporis porro ipsum, assumenda necessitatibus commodi ea,
            eveniet hic nam quidem ullam dignissimos perspiciatis accusamus
            maxime incidunt.
          </p>
        </section>
        <div className={styles["languages-container"]}>
          <div className={styles["languages-container-overlay"]}></div>
          <div className={styles.languages}>
            {languageIcons.map((icon) => (
              <img className={styles.language} src={icon.link} alt={icon.alt} />
            ))}
          </div>
        </div>
        <section className={styles.intro}>
          <h1 className={styles["intro__title"]}>
            Project info / Technologies used etc...
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            cupiditate soluta eaque iste animi possimus laboriosam quo eligendi
            non enim corrupti aperiam fugiat quas ad quam sunt natus obcaecati,
            sequi accusantium maxime suscipit voluptates. Enim deserunt earum
            itaque repellendus, id aperiam neque fugiat vel, adipisci ipsam
            quidem? Porro nobis sapiente minus. Corrupti doloremque possimus
            explicabo officiis placeat quidem, laborum voluptatem eveniet
            reprehenderit sequi, aspernatur excepturi blanditiis, sapiente
            perspiciatis minus perferendis odit. Repellat omnis libero iure
            obcaecati consectetur accusantium odio quisquam maiores quibusdam
            quo, ea fuga voluptatem tempora rerum provident maxime, porro illum
            incidunt amet quidem rem! Doloremque quasi cumque nihil.
          </p>
        </section>
      </div>
    </>
  );
}
