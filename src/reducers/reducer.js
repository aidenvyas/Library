import data from "../store/data.json";
const initialState = {
  books: [],
  dbbooks: {},
  searchValue: "",
  results: [],
  modal: false,
  show: "",
  modalopen: false,
  modalcontent: null,
  username: "",
  password: "",
  email: "",
  submit: false,
  signup: false,
  token: "",
  favourites: "",
  apierrors: ""
};

const reducer = (state = initialState, action) => {
  console.log("reducer is running", state);
  switch (action.type) {
    case "BOOKS":
      return { ...state, books: action.value, dbbooks: action.value };
    case "INPUTCHANGE":
      if (action.name === "username") {
        return { ...state, username: action.value };
      } else if (action.name === "password") {
        return { ...state, password: action.value };
      } else {
        return { ...state, email: action.value };
      }

    case "SUBMIT":
      const { value } = action;
      const result = state.books.filter(val =>
        val.title.toLowerCase().includes(value.toLowerCase())
      );
      var show = false;
      if (result.length > 0) {
        show = true;
      }
      if (!value) {
        return {
          ...state,
          books: state.dbbooks,
          showToggle: show,
          searchValue: action.value
        };
      }
      return {
        ...state,
        books: result,
        showToggle: show,
        searchValue: action.value
      };
    case "MODAL":
      return {
        ...state,
        modalopen: !action.value.status,
        modalcontent: action.value.book
      };
    case "FORMSUBMIT":
      return {
        ...state,
        submit: true
      };
    case "TOKEN":
      window.sessionStorage.setItem("token", action.value);

      return {
        ...state,
        token: action.value
      };
    case "LOGOUT":
      window.sessionStorage.clear();
      return state;

    case "FAVOURITE": {
      return { ...state, favourites: action.value };
    }
    case "SIGNUP": {
      return { ...state, signup: !state.signup };
    }
    case "UNFAVOUR": {
      console.log("unfav");
      // return {...state,favourites:stat.favourites.filter((i)!=action.value)}
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
