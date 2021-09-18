import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseMenu } from "../../Redux/Actions/course";
import { Link } from "react-router-dom";

import style from "./CourseListStyle.module.css";

class CourseList extends Component {
  renderCourseMenu = () => {
    return this.props.coursesMenu.map((item, index) => {
      return (
        <div className={style.courseList__item}>
          <div className={style.courseList__card} key={index}>
            <img src={item.hinhAnh} />
            <h3 className={style.courseList__header}>{item.tenKhoaHoc}</h3>
            <p>{item.nguoiTao.hoTen}</p>
            <p>Rating</p>
            <Link to={`/detail/${item.maKhoaHoc}`} className="btn btn-secondary">Go to detail</Link>
          </div>
        </div>
      );
    });
  };

  renderCourseHeader = () => {
    return this.props.coursesMenu
      .map((item, index) => {
        return <h1 key={index}>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</h1>;
      })
      .slice(0, 1);
  };

  render() {
    return (
      <div>
        <div className={style.courseList__container}>
          {this.renderCourseHeader()}
        
          {this.renderCourseMenu()}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourseMenu(this.props.match.params.listID));
  }
}

const mapStateToProps = (state) => ({
  coursesMenu: state.course.coursesMenu,
});

export default connect(mapStateToProps)(CourseList);
