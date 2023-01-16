import React, { useEffect } from "react";
import { useNavigation } from "react-router-dom";

interface Props {}

function SplashPage(props: Props) {
  const {} = props;

  useEffect(() => {
    setTimeout(() => {
      console.log("5secs");
    }, 5000);
  }, []);

  return (
    <>
      <div className="splash">SplashPage</div>
    </>
  );
}

export default SplashPage;
