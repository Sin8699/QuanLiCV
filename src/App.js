import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Search from "./Component/Search";
import Sort from "./Component/Sort";
import FormWork from "./Component/FormWork";
import Task from "./Component/Task";

function App(props) {
  return (
    <div className="App">
      <div className="title"> Quản lí công việc</div>
      <hr />
      <div className="contain">
        {props.showAdd === "1" ? (
          <FormWork
            title="Thêm công việc"
            name=""
            state="false"
            click={({ title, completed }) =>
              props.dispatch({ type: "ADD_NEW_TASK", title, completed })
            }
          />
        ) : (
          props.showAdd === "2" && (
            <FormWork
              title="Cập nhật công việc"
              name={props.data[props.id].title}
              state={props.data[props.id].completed}
              click={({ title, completed }) => {
                props.dispatch({
                  type: "EDIT",
                  title,
                  completed,
                  id: props.id
                });
                props.dispatch({ type: "SET_SHOW_ADD", state: "0" });
              }}
            />
          )
        )}
        <div className="right">
          {props.showAdd === "0" && (
            <button
              className="addWork"
              onClick={() =>
                props.dispatch({ type: "SET_SHOW_ADD", state: "1" })
              }
            >
              <span>+</span>
              Thêm công việc
            </button>
          )}

          <div className="control">
            <Search />
            <Sort />
          </div>
          <Task />
        </div>
      </div>
    </div>
  );
}

var mapStateToProps = state => {
  return {
    showAdd: state.showAdd,
    id: state.ID,
    data: state.dataFetch.data
  };
};

export default connect(mapStateToProps)(App);
