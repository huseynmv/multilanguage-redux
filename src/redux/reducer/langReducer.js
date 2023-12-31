const localStorageLang = localStorage.getItem("language");

const initialState = {
  language: localStorageLang ? localStorageLang : "EN",
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default langReducer;
