import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { translate } from "./translation";
import { setLanguage } from "./redux/action/langAction";

const App = () => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.lang.language);
  console.log(language);

  return (
    <>
      <p>{translate("greeting", language)}</p>
      <button onClick={() => dispatch(setLanguage("AZ"))}>azeri</button>
      <button onClick={() => dispatch(setLanguage("EN"))}>English</button>
    </>
  );
};

export default App;
