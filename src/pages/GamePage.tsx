import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import styles from "./GamePage.module.scss";
import ronaldo from "../assets/images/ronaldo.jpg";
import messi from "../assets/images/messi.png";
import mbappe from "../assets/images/mbappe.jpg";
import neymar from "../assets/images/neymar.jpg";

interface Props {}
interface RootState {
  registerSlice: {
    selectedTheme: number;
  };
}
type themeDetail = {
  themeID: number;
  imageSRCs: string[];
};

function GamePage(props: Props) {
  const {} = props;

  const registeredTheme = useSelector(
    (state: RootState) => state.registerSlice.selectedTheme
  );

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

  return (
    <>
      <div className={styles.GamePage}>
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
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </>
  );
}

export default GamePage;
