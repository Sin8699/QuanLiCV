// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  data: null,
  error: null
};

export function reducerFetchAPI(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.response.map(x => ({
          title: x.title,
          completed: x.completed.toString(),
          show: true
        }))
      };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error };
    case "ADD_NEW_TASK":
      return {
        ...state,
        data: [
          {
            title: action.title,
            completed: action.completed,
            show: true
          }
        ].concat(state.data)
      };

    case "SEARCH_FILL":
      var temp = null;
      if (action.fill === "1") {
        temp = { ...state, data: state.data.map(x => ({ ...x, show: true })) };
      }

      if (action.fill === "2")
        // KICH HOAT
        temp = {
          ...state,
          data: state.data.map(x =>
            x.completed === "false"
              ? { ...x, show: true }
              : { ...x, show: false }
          )
        };
      if (action.fill === "3")
        //AN
        temp = {
          ...state,
          data: state.data.map(x =>
            x.completed === "true"
              ? { ...x, show: true }
              : { ...x, show: false }
          )
        };
      if (action.title === "") return temp;
      return {
        ...temp,
        data: temp.data.map(x =>
          x.title.includes(action.title) && x.show === true
            ? { ...x, show: true }
            : { ...x, show: false }
        )
      };
    // case "SORT_STATE":
    //   if (action.fill === "1")
    //     //ALL
    //     return { ...state, data: state.data.map(x => ({ ...x, show: true })) };
    //   if (action.fill === "2")
    //     // KICH HOAT
    //     return {
    //       ...state,
    //       data: state.data.map(x =>
    //         x.completed === "false"
    //           ? { ...x, show: true }
    //           : { ...x, show: false }
    //       )
    //     };
    //   if (action.fill === "3")
    //     //AN
    //     return {
    //       ...state,
    //       data: state.data.map(x =>
    //         x.completed === "true"
    //           ? { ...x, show: true }
    //           : { ...x, show: false }
    //       )
    //     };
    case "EDIT":
      return {
        ...state,
        data: state.data.map((x, index) =>
          index === action.id
            ? { ...x, title: action.title, completed: action.completed }
            : x
        )
      };
    case "DELETE":
      return {
        ...state,
        data: state.data.filter((x, index) => index !== action.id)
      };
    case "SORT_NAME":
      if (action.sort === "AZ")
        return {
          ...state,
          data: state.data
            .sort((a, b) => {
              var nameA = a.title.toUpperCase(); // bỏ qua hoa thường
              var nameB = b.title.toUpperCase(); // bỏ qua hoa thường
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            })
            .concat([])
        };
      if (action.sort === "ZA")
        return {
          ...state,
          data: state.data
            .sort((a, b) => {
              var nameA = a.title.toUpperCase(); // bỏ qua hoa thường
              var nameB = b.title.toUpperCase(); // bỏ qua hoa thường
              if (nameA > nameB) {
                return -1;
              }
              if (nameA < nameB) {
                return 1;
              }
              return 0;
            })
            .concat([])
        };
      if (action.sort === "K")
        return {
          ...state,
          data: state.data
            .sort((a, b) => {
              var A = a.completed.toUpperCase(); // bỏ qua hoa thường
              var B = b.completed.toUpperCase(); // bỏ qua hoa thường
              if (A < B) {
                return -1;
              }
              if (A > B) {
                return 1;
              }
              return 0;
            })
            .concat([])
        };
      if (action.sort === "H")
        return {
          ...state,
          data: state.data
            .sort((a, b) => {
              var A = a.completed.toUpperCase(); // bỏ qua hoa thường
              var B = b.completed.toUpperCase(); // bỏ qua hoa thường
              if (A > B) {
                return -1;
              }
              if (A < B) {
                return 1;
              }
              return 0;
            })
            .concat([])
        };
    default:
      return state;
  }
}
