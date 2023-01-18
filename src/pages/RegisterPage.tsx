import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.scss";
import messi from "../assets/images/messi.png";

interface Props {}

function RegisterPage(props: Props) {
  const {} = props;

  return (
    <>
      <div className={styles.register}>
        <h1>Choose your prefered theme</h1>
        <section>
          <div className={styles.icon}>
            <div className={styles.imgContainer}>
              <img src={messi} alt="messi" />
            </div>
            <p>Chess Pieces</p>
          </div>
          <div className={styles.icon}>
            <div className={styles.imgContainer}>
              <img src={messi} alt="messi" />
            </div>
            <p>Chess Pieces</p>
          </div>
          <div className={styles.icon}>
            <div className={styles.imgContainer}>
              <img src={messi} alt="messi" />
            </div>
            <p>Chess Pieces</p>
          </div>
          <div className={styles.icon}>
            <div className={styles.imgContainer}>
              <img src={messi} alt="messi" />
            </div>
            <p>Chess Pieces</p>
          </div>
        </section>
        <Link to="/game" className={styles.buttonLink}>
          Start Game
        </Link>
      </div>
    </>
  );
}

export default RegisterPage;
