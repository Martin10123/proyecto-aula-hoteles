import { IoIosArrowBack } from "react-icons/io";
import { hotel3 } from "../assets";

import styles from "./viewRoom.module.css";

export const ViewRoom = () => {
  return (
    <article className={styles.room__container}>
      <div className={styles.room__content}>
        <div className={styles.room__header}>
          <IoIosArrowBack />
        </div>
        <div className={styles.room__content_info}>
          <div className={styles.room__title_info_room}>
            <h2>Habitación Suite</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              et reprehenderit quis at voluptate recusandae dolore repellat
              odio? Atque porro cum molestias rerum debitis quasi dolore
              deleniti eveniet repellat assumenda?
            </p>
          </div>

          <figure className={styles.room__content_img}>
            <img
              alt="Foto de una de las habitaciones"
              className={styles.room__img}
              src={hotel3}
            />
          </figure>

          <div className={styles.room__side_right}>
            <ul className={styles.room__list_right}>
              <li>
                <span>Tipo de cama:</span> Cama individual
              </li>
              <li>
                <span>Maximo de personas:</span> 5
              </li>
              <li>
                <span>Cuenta con:</span> vista al mar
              </li>
              <li>
                <span>Numero de camas:</span> 2
              </li>
              <li>
                <span>Incluye el desayuno:</span> Si
              </li>
              <li>
                <span>Precio por noche:</span> 1.000.000
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.room__buttons}>
          <button className={styles.room__btn}>Reservar</button>
          <button className={styles.room__btn}>Cancelar</button>
        </div>
      </div>
    </article>
  );
};
