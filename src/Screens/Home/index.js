import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems";

import { connect } from "react-redux";
import { fetchCourse } from "../../Redux/Actions/user";


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
        <h1 className="display-4 text-center">Danh sách khóa học</h1>
        <div className="container">
          <div class="row">{this.renderCourseList()}</div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourse())
  }
}

const mapStateToProps = (state) => ({
  courseList: state.course.courses,
});
export default connect(mapStateToProps)(HomeScreen);
