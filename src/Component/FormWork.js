import React, { useState } from "react";
import "./Component.css";
import { connect } from "react-redux";

var FormWork = props => {
  var [completed, setCompleted] = useState(props.state);
  var [title, set] = useState(props.name);
  return (
    <div className="FormWork">
      <div className="header">
        <span>{props.title}</span>
        <i
          class="fa fa-times circle-icon"
          onClick={() => props.dispatch({ type: "SET_SHOW_ADD", state: "0" })}
        />
      </div>
      <div className="name">
        Tên :
        <input value={title} onChange={e => set(e.target.value)} />
      </div>

      <div className="state">
        Trạng thái :
        <select
          onChange={e => {
            setCompleted(e.target.value);
          }}
        >
          <option value="false" selected={completed === "true" ? false : true}>
            Kích hoạt
          </option>
          <option value="true" selected={completed === "false" ? false : true}>
            Ẩn
          </option>
        </select>
      </div>

      <div className="button_control">
        <button
          className="save"
          onClick={() => {props.click({ title, completed });
        props.dispatch({type:"SORT_NAME",sort:props.sort})}}
        >
          <span>+</span>
          Lưu lại
        </button>
        <button
          className="del"
          onClick={() => props.dispatch({ type: "SET_SHOW_ADD", state: "0" })}
        >
          <i class="fa fa-times" />
          Hủy bỏ
        </button>
      </div>
    </div>
  );
};

var mapStateToProps = state => {
  return {
    sort: state.sort
  };
};

export default connect(mapStateToProps)(FormWork);
