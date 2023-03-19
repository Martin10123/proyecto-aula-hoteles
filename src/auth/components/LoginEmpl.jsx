import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LoginLayout } from "../layout/LoginLayout";

import styles from "./login.module.css";

export const LoginEmployee = () => {
  return (
    <LoginLayout areYou="Empleado">
      <div className={styles.login__content_admi}>
        <div className={styles.login__input}>
          <MdAlternateEmail />
          <input type="text" placeholder="Correo..." />
        </div>
        <div className={styles.login__input}>
          <RiLockPasswordLine />
          <input type="password" placeholder="Contraseña..." />
        </div>

        <button className={styles.login__button}>Ingresar</button>
      </div>
    </LoginLayout>
  );
};
