import React from "react";
import SliderComponent from "../../Components/Slider/SliderComponent";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <SliderComponent />
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>UN LUGAR DE OPORTUNIDADES</h2>
          <p>
            Nuestro Colegio, es una entidad sin fines de lucro perteneciente a
            la Asociación Escolar y Cultural de Córdoba, conformada por padres,
            docentes, ex alumnos y todo aquella persona que decida asociarse a
            los fines de participar activamente de la vida de la institución.
          </p>
          <p>
            Mediante la dirección de una Comisión Directiva elegida por los
            socios, a través del voto, conformamos una COMUNIDAD ESCOLAR en
            donde no hay propietarios del colegio sino que TODOS SOMOS EL
            COLEGIO comprometiéndonos a legar una mejor institución para que
            nuestros alumnos puedan disfrutar de una experiencia educativa cada
            vez más enriquecida y a la vanguardia de las necesidades del
            contexto en el cual nuestros estudiantes se insertan en el mundo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
