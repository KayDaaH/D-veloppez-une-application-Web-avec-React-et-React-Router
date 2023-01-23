// import Footer from "../../components/Footer/Footer";
import AboutMenu from "../../components/AboutMenu/AboutMenu";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.bloc_image}>
          <div className={styles.darken}></div>
        </div>
        <div className={styles.menus_container}>
          <AboutMenu
            title="Fiabilité"
            text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <AboutMenu
            title="Respect"
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <AboutMenu
            title="Service"
            text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <AboutMenu
            title="Sécurité"
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
      <Footer />

      {/* <div className={styles.footer}>
      </div> */}
    </div>
  );
}

export default About;
