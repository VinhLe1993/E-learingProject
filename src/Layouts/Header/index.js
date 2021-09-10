import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Images/logo.png";
import style from "./style.module.css";
import { useSelector } from "react-redux";

export default function Header(props) {
  const { userSignin } = useSelector((state) => state.account);

  const renderSignin = () => {
    if (userSignin !== null) {
      return <NavLink
      className="nav-link"
      exact
      to="/profile"
      activeStyle={{ color: "black" }}
    >
      Hi! {userSignin.taiKhoan}
    </NavLink>
    } else {
      return (
        <NavLink
          className="nav-link"
          exact
          to="/signin"
          activeStyle={{ color: "black" }}
        >
          Đăng nhập
        </NavLink>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={Logo} className={style.logo} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "black" }}
              exact
              className="nav-link"
              to="/"
            >
              Trang chủ
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "black" }}
              className="nav-link"
              exact
              to="/signup"
            >
              Đăng kí
            </NavLink>
          </li>
          <li className="nav-item">
            {renderSignin()}
          </li>
        </ul>
      </div>
    </nav>
  );
}
