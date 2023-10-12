import React from "react";
import en from "../src/translation/en.json";
import az from "../src/translation/az.json";
import { useSelector } from "react-redux";

const useTranslate = () => {
  const language = useSelector((state) => state.lang.language);

  const translate = (key) => {
    let langData = {};
    if (language === "EN") {
      langData = en;
    } else if (language === "AZ") {
      langData = az;
    }

    // console.log("custom hook");
    return langData[key];
  };
  return translate;
};

export default useTranslate;
