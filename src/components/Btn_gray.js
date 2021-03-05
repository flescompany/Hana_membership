import React from "react";
import "./Btn_gray.css";
import "./Guide_ui.css";
import classNames from 'classnames'; 
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Btn_gray(style) {
  return (
    <div className="Btn_gray">
      <input className={classNames(style)} type="button" value="회원가입" />
    </div>
  );
}


export default Btn_gray;
