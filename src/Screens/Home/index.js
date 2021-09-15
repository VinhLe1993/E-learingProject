import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCourse } from "../../Redux/Actions/course";

//Style

import style from "./HomeStyle.module.css";


class HomeScreen extends Component {
  renderCourseList = () => {
    return this.props.courseList.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <CourseItem item={item} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className={style.carousel}>
          <div className={style.carousel__content}>
            <h4 className={style.carousel__topHeader}>CyberSoft</h4>
            <h2 className={style.carousel__mainHeader}>
              Khởi đầu
              <br /> sự nghiệp của bạn
            </h2>

            <NavLink
              activeStyle={{ color: "black" }}
              className={style.carousel__detail}
              exact
              to="/signup"
            >
              Xem khóa học
            </NavLink>
          </div>
        </div>
        <div className={style.content}>
          <h1 className={style.content__header}>Các khóa học mới nhất </h1>
          <div>
            <div class="row">{this.renderCourseList()}</div>
          </div>
        </div>
        
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourse());
  }
}

const mapStateToProps = (state) => ({
  courseList: state.course.courses,
});
export default connect(mapStateToProps)(HomeScreen);
