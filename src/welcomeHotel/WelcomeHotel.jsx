import { DropdownMenu } from "../dropdown/DropdownMenu";

import styles from "./welcomeHotel.module.css";

export const WelcomeHotel = () => {
  return (
    <section className={styles.welcome__container}>
      <div className={styles.welcome__content}>
        <DropdownMenu />

        <div className={styles.welcome__content_info}>
          <span className={styles.welcome__title_welcome}>Bienvenido a,</span>
          <h1 className={styles.welcome__title_hotel}>Hotel universitario</h1>
          <p className={styles.welcome__title_informa}>
            Aqui encontraras habitaciones de todos los estilos y con todas las
            comodidades
          </p>

          <div className={styles.welcome__buttons}>
            <button>Reservar</button>
          </div>

          <div className={styles.welcome__content_btn_line}>
            <div className={styles.welcome__line_bottom}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
