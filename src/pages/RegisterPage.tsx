import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.scss";
import messi from "../assets/images/messi.png";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { setSelectedTheme } from "../redux/features/registerSlice/registerSlice";

interface Props {}
type themeObject = {
  imageSrc: string;
  nameTag: string;
  id: number;
};

function RegisterPage(props: Props) {
  const {} = props;
  const dispatch = useDispatch();

  const themes: themeObject[] = [
    {
      imageSrc: "",
      nameTag: "Chess Pieces",
      id: 0,
    },
    {
      imageSrc: "",
      nameTag: "Football Players",
      id: 1,
    },
    {
      imageSrc: "",
      nameTag: "Football Clubs",
      id: 2,
    },
    {
      imageSrc: "",
      nameTag: "Country Flags",
      id: 3,
    },
  ];

  const makeSelection = (id: number) => {
    dispatch(setSelectedTheme(id));
  };

  return (
    <>
      <div className={styles.register}>
        <h1>Choose your prefered theme</h1>
        <section>
          {themes.map((theme) => {
            return (
              <div
                className={styles.icon}
                key={theme.id}
                onClick={() => makeSelection(theme.id)}
              >
                <div className={styles.imgContainer}>
                  <img src={messi} alt="messi" />
                </div>
                <p>{theme.nameTag}</p>
              </div>
            );
          })}
        </section>
        <Link to="/game" className={styles.buttonLink}>
          Start Game
        </Link>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
