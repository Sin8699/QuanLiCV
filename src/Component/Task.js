import React from "react";
import "./Component.css";
import { connect } from "react-redux";
import ItemTask from "./ItemTask";

var Task = props => {
  var valueS = React.createRef("");
  return (
    <table className="Task">
      <tr className="title_Task">
        <th>STT</th>
        <th>Tên</th>
        <th>Trạng Thái</th>
        <th>Hành Động</th>
      </tr>
      <tr className="control-Task">
        <th />
        <th>
          <input
            className="sreach-name"
            ref={valueS}
            onChange={() => {
                props.dispatch({ type: "SEARCH_FILL", title: valueS.current.value,fill:props.fill });
            }}
          />
        </th>
        <th>
          <select
            onChange={e => {
              props.dispatch({ type: "SEARCH_FILL", fill: e.target.value,title:""});
              props.dispatch({ type: "SET_FILL", fill: e.target.value });
            }}
          >
            <option value="1">Tất cả</option>
            <option value="2">Kích hoạt</option>
            <option value="3">Ẩn</option>
          </select>
        </th>
        <th />
      </tr>
      {props.data !== null &&
        props.data.map(
          (x, index) =>
            x.show && <ItemTask id={index} name={x.title} state={x.completed} />
        )}
    </table>
  );
};
var mapStateToProps = state => {
  return {
    data: state.dataFetch.data,
    fill:state.fill
  };
};
export default connect(mapStateToProps)(Task);
