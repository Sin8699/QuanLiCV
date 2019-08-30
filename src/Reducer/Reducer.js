import { combineReducers } from "redux";
import { reducerFetchAPI } from "./ReducerFetchData";
import {
  ReducerShowAdd,
  ReducerIndexEdit,
  ReducerSort,
  ReducerFill
} from "./ReducerChild";

export var reducer = combineReducers({
  dataFetch: reducerFetchAPI,
  showAdd: ReducerShowAdd,
  ID: ReducerIndexEdit,
  sort: ReducerSort,
  fill: ReducerFill
});
