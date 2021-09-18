import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./DetailStyle.module.css";

import { fetchDetailCourse } from "../../Redux/Actions/course";

class CourseDetailScreen extends Component {
  render() {
    return (
      <div>
        <div className={style.courseDetail__carousel}>
          <div className={style.courseDetail__container}>
            <div className={style.courseDetail__header}>
              <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
              <h6>Đánh giá khóa học: </h6>
              <button>Đăng kí</button>
            </div>
            <div className={style.courseDetail__img}>
            <img src={this.props.courseDetail.hinhAnh} alt="course detail" />
            </div>
           
          </div>
        </div>
        <div className={style.courseDetail__detail}>
          <h3>Giới thiệu khóa học</h3>
          <p>{this.props.courseDetail.moTa}</p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchDetailCourse(this.props.match.params.courseID));
  }
}

const mapStateToProps = (state) => ({
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    moTa: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});

export default connect(mapStateToProps)(CourseDetailScreen);
