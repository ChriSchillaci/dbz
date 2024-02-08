import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
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
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 70,
          }}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {transformations.map((transformation) => (
            <SwiperSlide key={transformation.id}>
              <div
                id={transformation.id}
                className={styles["transformation-card"]}
              >
                <img
                  className={styles["transformation-img"]}
                  src={transformation.image}
                  alt={transformation.name}
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
