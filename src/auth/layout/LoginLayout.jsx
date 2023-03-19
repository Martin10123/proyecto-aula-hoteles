import styles from "./loginLayout.module.css";

export const LoginLayout = ({
  titleComponent = "Ingresar",
  areYou = "administrador",
  children,
}) => {
  return (
    <div className={styles.login__container}>
      <div className={styles.login__content}>
        <span>
          <h1>{titleComponent}</h1>
          <span>({areYou})</span>
        </span>

        {children}
      </div>
    </div>
  );
};
