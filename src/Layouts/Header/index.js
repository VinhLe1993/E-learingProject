import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Images/logo.png";
import style from "./style.module.css";

import { connect } from "react-redux";
import { fetchCourseList } from "../../Redux/Actions/course";


class Header extends Component {
  state = {
    searchValue: "",
  };
  renderCourseArr = () => {
    return this.props.courseListArr.map((item, index) => {
      return (
        <a
          className="dropdown-item"
          key={index}
          href={`/courseslist/${item.maDanhMuc}`}
        >
          {item.tenDanhMuc}
        </a>
      );
    });
  };

  renderSignin = () => {
    if (this.props.userSignin !== null) {
      return (
        <NavLink
          className={style.headerbutton}
          exact
          to="/profile"
          activeStyle={{ color: "black" }}
        >
          Hi! {this.props.userSignin.taiKhoan}
        </NavLink>
      );
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

  



  

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="myStyle"
      >
        <a className={style.nav__logo} href="#">
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
                exact
                className={style.headerbutton}
                to="/"
                role="button"
              >
                Trang chủ
              </NavLink>
            </li>

            <li>
              <div class="btn-group">
                <button
                  type="button"
                  class={`btn btn-secondary dropdown-toggle ${style.dropdown__button}`}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Danh sách khóa học
                </button>
                <div class="dropdown-menu">{this.renderCourseArr()}</div>
              </div>
            </li>
            <li>
            <NavLink
                activeStyle={{ color: "black" }}
                className={style.headerbutton}
                exact
                to="/coursesearch"
              >
                Tìm kiếm khóa học
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "black" }}
                className={style.headerbutton}
                exact
                to="/signup"
              >
                Đăng kí
              </NavLink>
            </li>
            <li className="nav-item">{this.renderSignin()}</li>
          </ul>
        </div>
      </nav>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourseList());
  }
}

const mapStateToProps = (state) => ({
  courseListArr: state.course.coursesList,
  userSignin: state.account.userSignin,
});

export default connect(mapStateToProps)(Header);
