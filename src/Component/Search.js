import React from "react";
import "./Component.css";
import {connect} from "react-redux";

var Search=()=> {
  return (
    <form className="Search">
      <input placeholder="Nhập từ khóa ..."/>
      <button type="submit">
          <i className="fa fa-search"></i>
          Tìm</button>
    </form>
  );
}

export default Search;
