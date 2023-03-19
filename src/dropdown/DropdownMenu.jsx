import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import styles from "./dropdownMenu.module.css";

export const DropdownMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={styles.menubar__header}>
      <div
        className={styles.menubar__menu}
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      <div
        className={`${styles.menubar__container} ${
          !openMenu ? styles.menubar__hidden : ""
        }`}
      >
        <ul className={styles.menubar__content}>
          <li className={styles.menubar__item}>Ingresar como administrador</li>
          <li className={styles.menubar__item}>Ingresar como empleado</li>
          <li className={styles.menubar__item}>Reservar</li>
          <li className={styles.menubar__item}>Información</li>
        </ul>
      </div>
    </header>
  );
};
