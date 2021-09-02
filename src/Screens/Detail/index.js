import React, { Component } from "react";
import { connect } from "react-redux";


import { fetchDetailCourse } from "../../Redux/Actions/course";

class CourseDetailScreen extends Component {
  render() {
    return (
      <div>
        <img src={this.props.courseDetail.hinhAnh} alt="course detail" />
        <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchDetailCourse(this.props.match.params.courseID))
  }
}

const mapStateToProps = (state) => ({
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});

export default connect(mapStateToProps)(CourseDetailScreen);
