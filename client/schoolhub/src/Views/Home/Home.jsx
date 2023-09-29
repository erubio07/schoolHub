import React from "react";
import { NavLink } from "react-router-dom";
import SliderComponent from "../../Components/Slider/SliderComponent";
import intermcabios from "../../Images/intercambios.jpg";
import pasantias from "../../Images/pasantias.png";
import torneos from "../../Images/torneosestudiantiles.png";
import idiomas from "../../Images/idiomas.jpg";
import it from "../../Images/it.jpg";
import styles from "./Home.module.css";
import Navbar from "../../Components/NavBar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.slidercontainer}>
        <SliderComponent />
      </div>
      <div className={styles.featuresexplanation}>
        <div className={styles.featurestitle}>
          <h1 className={styles.tittleh1}>La Educación en Valores</h1>
          <p className={styles.firstParagraph}>
            Nuestra escuela se enorgullece de ofrecer una educación centrada en
            valores que prepara a los estudiantes para un futuro exitoso.
            Creemos que la educación no se trata solo de adquirir conocimientos,
            sino también de cultivar valores que son esenciales en la vida.
          </p>
          <p className={styles.firstParagraph}>
            Con nuestro compromiso con la excelencia académica y la formación
            integral, brindamos a los estudiantes la oportunidad de participar
            en:
          </p>
        </div>
        <div className={styles.featurecontainer}>
          <img
            src={intermcabios}
            alt="Intercambios Escolares"
            className={styles.featureimg}
          />
          <div className={styles.featurecontentintercambio}>
            <h2 className={styles.h2}>Intercambios Escolares</h2>
            <p className={styles.description}>
              Explora otras culturas y enriquece tu experiencia educativa con
              nuestros emocionantes programas de intercambio escolar
              internacionales.
            </p>
          </div>
        </div>
        <div className={styles.featurecontainer}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1, padding: "0 20px" }}>
              <h2
                style={{
                  background: "linear-gradient(to right, #ff9900, #ffcc00)",
                  display: "inline-block",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                Pasantías
              </h2>
              <p className={styles.description}>
                Adquiere experiencia práctica y desarrolla habilidades
                profesionales con pasantías en empresas locales mientras
                estudias en nuestra escuela.
              </p>
            </div>
            <img
              src={pasantias}
              alt="Pasantías"
              style={{
                maxWidth: "50%",
                maskImage: "linear-gradient(to left, transparent, black)",
              }}
            />
          </div>
        </div>
        <div className={styles.featurecontainer}>
          <img
            src={torneos}
            alt="Torneos Deportivos"
            className={styles.featureimg}
          />
          <div className={styles.featurecontenttorneos}>
            <h2 className={styles.h2}>Torneos Deportivos</h2>
            <p className={styles.description}>
              Fomentamos la actividad física y el espíritu deportivo con una
              variedad de torneos y competencias deportivas para nuestros
              estudiantes.
            </p>
          </div>
        </div>
        <div className={styles.featurestitle}>
          <h2 className={styles.tittleh2}>Oferta Académica</h2>
          <p className={styles.firstParagraph}>
            Además de nuestras características únicas, ofrecemos una amplia gama
            de opciones académicas, que incluyen:
          </p>
        </div>
        <div className={styles.academicoffer}>
          <div className={styles.academicoffercontainer}>
            <img
              src={idiomas}
              alt="Idiomas: Inglés, Portugués y Alemán"
              className={styles.academicofferimg}
            />
            <div className={styles.academicoffertext}>
              <h3 className={styles.academicoffertexth3}>
                Idiomas: Inglés, Italiano, Frances y Alemán
              </h3>
              <p className={styles.academicoffertextp}>
                La educación en idiomas no solo amplía las oportunidades
                laborales, sino que también facilita la comunicación en un mundo
                cada vez más interconectado. Dominar varios idiomas abre puertas
                tanto en el ámbito laboral como académico, lo que permite a
                nuestros estudiantes competir a nivel global.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.academicoffer}>
          <div className={styles.academicoffercontainer}>
            <img
              src={it}
              alt="Educación en Tecnología (IT)"
              className={styles.academicofferimg}
            />
            <div className={styles.academicoffertext}>
              <h3 className={styles.academicoffertexth3}>
                Educación en Tecnología (IT)
              </h3>
              <p className={styles.academicoffertextp}>
                Nuestros programas académicos están diseñados para preparar a
                los estudiantes para un mundo globalizado y tecnológico, donde
                las habilidades en idiomas y la competencia en tecnología son
                esenciales.
              </p>
              <p className={styles.academicoffertextp}>
                La educación en tecnología (IT) es fundamental en la actualidad,
                ya que vivimos en una era digital. La programación y las
                habilidades tecnológicas son altamente demandadas en el mercado
                laboral actual y futuro. Preparamos a nuestros estudiantes para
                enfrentar los desafíos tecnológicos del siglo XXI y destacarse
                en una variedad de industrias.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inscriptions}>
        <h2 className={styles.inscriptionsTittle}>
          Inscripciones para el ciclo lectivo 2024
        </h2>
        <p className={styles.inscriptionsText}>
          ¡Únete a nosotros en este viaje educativo que va más allá de las aulas
          y promueve el desarrollo integral de cada estudiante!
        </p>
        <p className={styles.inscriptionsText}>
          ¡Inscríbete ahora y forma parte de nuestra comunidad educativa!
        </p>
        <div className={styles.registerButton}>
          <NavLink className={styles.registerLink}>Regístrate</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
