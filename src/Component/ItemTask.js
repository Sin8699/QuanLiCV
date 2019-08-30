import React from "react";
import "./Component.css";
import { connect } from "react-redux";

var ItemTask = props => {
  return (
    <tr className="ItemTask">
      <th>{props.id}</th>
      <th>{props.name}</th>
      <th className="state">
        {props.state=="false" ? (
          <button className="start">Kích Hoạt</button>
        ) : (
          <button className="hide">Ẩn</button>
        )}
      </th>
      <th className="action">
        <button
          className="edit"
          onClick={() => {
            props.dispatch({ type: "SET_SHOW_ADD", state: "2" });
            props.dispatch({ type: "SET_ID", id: props.id });
          }}
        >
          <i className="fa fa-edit" />
          Sửa
        </button>
        <button
          className="del"
          onClick={() => props.dispatch({ type: "DELETE", id: props.id })}
        >
          <i className="fa fa-trash" />
          Xóa
        </button>
      </th>
    </tr>
  );
};

export default connect()(ItemTask);
