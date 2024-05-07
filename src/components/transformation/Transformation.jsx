import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.scss";

const Transformation = ({ charData }) => {
  const { transformations } = charData;
  return (
    <section className={styles.Transformation}>
      <h1 className={styles["Transformation__title"]}>Transformation</h1>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 70,
          }}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
        >
          {transformations.map((transformation) => (
            <SwiperSlide key={transformation.id}>
              <div
                id={transformation.id}
                className={styles["transformation-card"]}
              >
                <Image
                  className={styles["transformation-img"]}
                  src={transformation.image}
                  alt={transformation.name}
                  height={1080}
                  width={1920}
                  quality={80}
                />
                <p className={styles["transformation-name"]}>
                  {transformation.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Transformation;
