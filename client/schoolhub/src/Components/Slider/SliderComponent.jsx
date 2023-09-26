import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen0 from "../../Images/Imagen0.jpg";
import imagen1 from "../../Images/Imagen1.jpg";
import imagen2 from "../../Images/Imagen2.jpg";
import styles from "./SliderComponent.module.css";

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.slidercontainer}>
      <Slider {...settings}>
        <div>
          <div className={styles.imagecontainer}>
            <img className={styles.img} src={imagen0} alt="image0" />
            <div className={styles.textcontainer}>
              <p>
                Nuestro principal objetivo es que los alumnos enriquezcan sus
                horizontes culturales, sociales y humanos, siendo los
                protagonistas y responsables de sus propios procesos de
                aprendizaje.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.imagecontainer}>
          <img className={styles.img} src={imagen1} alt="image1" />
          <div className={styles.textcontainer}>
            <p>
              Tenemos como meta formar jóvenes solidarios, informados y capaces
              de contribuir a crear un mundo mejor.
            </p>
          </div>
        </div>
        <div className={styles.imagecontainer}>
          <img className={styles.img} src={imagen2} alt="image2" />
          <div className={styles.textcontainer}>
            <p>
              Nuestro proyecto pedagógico prepara a los alumnos en su inserción
              en el ámbito de los estudios superiores y en un mundo laboral sin
              fronteras.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
