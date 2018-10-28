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
  submit: false,
  token: "",
  favourites: "",
  apierrors:""
};

const reducer = (state = initialState, action) => {
  console.log("reducer is running", state);
  switch (action.type) {
    case "BOOKS":
      return { ...state, books: action.value, dbbooks: action.value };
    case "INPUTCHANGE":
      if (action.name === "username") {
        return { ...state, username: action.value };
      } else {
        return { ...state, password: action.value };
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
      console.log("logging");
      return {
        ...state,
        submit: true
      };
    case "TOKEN":
      return {
        ...state,
        token: action.value
      };
    case "FAVOURITE": {
      console.log(action.value," favourite id")
      return { ...state, favourites: action.value };
    }
    default:
      return state;
  }
};

export default reducer;
