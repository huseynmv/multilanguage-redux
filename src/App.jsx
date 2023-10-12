import React from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "./redux/action/langAction";
import useTranslate from "../src/customHook/useTranslate";

const App = () => {
  const dispatch = useDispatch();
  const translate = useTranslate();
  return (
    <>
      <p>{translate("greeting")}</p>
      <button onClick={() => dispatch(setLanguage("AZ"))}>Azerbaijani</button>
      <button onClick={() => dispatch(setLanguage("EN"))}>English</button>
    </>
  );
};

export default App;
