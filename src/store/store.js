import { createStore } from "redux";
import data from "./data.json";
const initialState = {
  books: data,
  searchValue: "",
  results: [],
  showToggle: false
};

const reducer = (state = initialState, action) => {
  console.log("reducer is running", action);
  switch (action.type) {
    case "INPUTCHANGE":
      return { ...state, searchValue: action.value };
    case "SUBMIT":
      const { value } = action;
      const result = state.books.filter(val =>
        val.title.toLowerCase().includes(value.toLowerCase())
      );
      var show = false;
      if (result.length > 0) {
        show = true;
      }

      console.log("results of search ", result);

      return { ...state, results: result, showToggle: show };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
