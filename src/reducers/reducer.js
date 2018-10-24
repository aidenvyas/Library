import data from "../store/data.json";
const initialState = {
  books: data,
  searchValue: "",
  results: [],
  modal: false,
  show: "",
  modalopen: false,
  modalcontent: null
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
      if (!value) {
        return {
          ...state,
          books: data,
          showToggle: show,
          searchValue: action.value
        };
      }
      console.log(result, "in reducer");
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

    default:
      return state;
  }
};

export default reducer;
