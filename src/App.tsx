import { Route, Routes } from "react-router-dom";
import { createRef } from "react";
import SplashPage from "./pages/SplashPage";
import GamePage from "./pages/GamePage";
import RegisterPage from "./pages/RegisterPage";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.scss";

function App() {
  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/register-game" element={<RegisterPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
      ;
    </>
  );
}
export default App;
