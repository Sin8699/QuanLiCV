export var ReducerShowAdd = (state = "0", action) => {
  switch (action.type) {
    case "SET_SHOW_ADD":
      return action.state;
    default:
      return state;
  }
}; 

export var ReducerIndexEdit = (state = null, action) => {
    switch (action.type) {
      case "SET_ID":
        return action.id;
      default:
        return state;
    }
  }; 

  export var ReducerSort = (state = "AZ", action) => {
    switch (action.type) {
      case "SET_SORT":
        return action.sort;
      default:
        return state;
    }
  }; 


  export var ReducerFill = (state = "1", action) => {
    switch (action.type) {
      case "SET_FILL":
        return action.fill;
      default:
        return state;
    }
  }; 