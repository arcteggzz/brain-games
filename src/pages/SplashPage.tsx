import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import "./SplashPage.scss";

interface Props {}

function SplashPage(props: Props) {
  const {} = props;
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/register-game");
    }, 5000);
  }, []);

  return (
    <>
      <div className="splash">
        <CircleLoader size={100} color="#ffffff" />
      </div>
    </>
  );
}

export default SplashPage;
