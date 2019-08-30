import React from "react";
import "./Component.css";
import { connect } from "react-redux";

var Sort = props => {
  return (
    <div className="Sort">
      <div class="btn-group">
        <button
          type="button"
          class="btn dropdown-toggle"
          data-toggle="dropdown"
        >
          Sắp xếp
        </button>
        <div class="dropdown-menu">
          <a
            class="dropdown-item"
            href="#"
            onClick={() => {
              props.dispatch({ type: "SET_SORT", sort: "AZ" });
              props.dispatch({ type: "SORT_NAME", sort: "AZ" });
            }}
          >
            A=>Z
            <i
              class="fa fa-check"
              style={
                props.sort === "AZ" ? { color: "black" } : { color: "white" }
              }
            />
          </a>
          <a
            class="dropdown-item"
            href="#"
            onClick={() => {
              props.dispatch({ type: "SET_SORT", sort: "ZA" });
              props.dispatch({ type: "SORT_NAME", sort: "ZA" });
            }}
          >
            Z=>A
            <i
              class="fa fa-check"
              style={
                props.sort === "ZA" ? { color: "black" } : { color: "white" }
              }
            />
          </a>
          <div class="dropdown-divider" />
          <a
            class="dropdown-item"
            href="#"
            onClick={() => {
              props.dispatch({ type: "SET_SORT", sort: "K" });
              props.dispatch({ type: "SORT_NAME", sort: "K" });
            }}
          >
            Trạng thái kích hoạt
            <i
              class="fa fa-check"
              style={
                props.sort === "K" ? { color: "black" } : { color: "white" }
              }
            />
          </a>
          <a
            class="dropdown-item"
            href="#"
            onClick={() => {
              props.dispatch({ type: "SET_SORT", sort: "H" });
              props.dispatch({ type: "SORT_NAME", sort: "H" });
            }}
          >
            Trạng thái ẩn
            <i
              class="fa fa-check"
              style={
                props.sort === "H" ? { color: "black" } : { color: "white" }
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};

var mapStateToProps = state => {
  return {
    sort: state.sort
  };
};

export default connect(mapStateToProps)(Sort);
