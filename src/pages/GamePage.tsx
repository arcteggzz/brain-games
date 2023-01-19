import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import styles from "./GamePage.module.scss";
import ronaldo from "../assets/images/ronaldo.jpg";
import messi from "../assets/images/messi.png";
import mbappe from "../assets/images/mbappe.jpg";
import neymar from "../assets/images/neymar.jpg";
import { setGameActive } from "../redux/features/gameSlice/gameSlice";

interface Props {}
interface RootStateRegisterSlice {
  registerSlice: {
    selectedTheme: number;
  };
}

interface RootStateGameSlice {
  gameSlice: {
    gameActive: boolean;
  };
}

type themeDetail = {
  themeID: number;
  imageSRCs: string[];
};

function GamePage(props: Props) {
  const {} = props;
  const dispatch = useDispatch();
  const registeredTheme = useSelector(
    (state: RootStateRegisterSlice) => state.registerSlice.selectedTheme
  );

  const gameSlice = useSelector((state: RootStateGameSlice) => state.gameSlice);

  const themeDetails: themeDetail[] = [
    {
      themeID: 0,
      imageSRCs: [messi, ronaldo, neymar, mbappe],
    },
    {
      themeID: 1,
      imageSRCs: [messi, ronaldo, neymar, mbappe],
    },
    {
      themeID: 2,
      imageSRCs: [messi, ronaldo, neymar, mbappe],
    },
    {
      themeID: 3,
      imageSRCs: [messi, ronaldo, neymar, mbappe],
    },
  ];

  const chosenThemeDetail: themeDetail[] = themeDetails.filter(
    (theme) => theme.themeID === registeredTheme
  );

  const uniqueID = () => {
    return Math.floor(Math.random() * (Date.now() / 10 ** 9.8) + 2);
  };

  const startGame = () => {
    dispatch(setGameActive());
  };

  return (
    <>
      <div className={styles.GamePage}>
        <section className={styles.timer}>
          <p>02:45</p>
        </section>
        <section className={styles.section_container}>
          {!gameSlice.gameActive ? (
            <section className={styles.instructionSection}>
              <h1>when you click start, your timer starts</h1>
              <button className={styles.startButton} onClick={startGame}>
                Start Game
              </button>
            </section>
          ) : (
            <section>
              {chosenThemeDetail[0].imageSRCs.map((image) => {
                return (
                  <div className={styles.icon} key={uniqueID()}>
                    <div className={styles.imgContainer}>
                      <img src={image} alt="messi" />
                    </div>
                  </div>
                );
              })}
            </section>
          )}
        </section>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default GamePage;
