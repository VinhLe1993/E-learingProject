import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourse } from "../../Redux/Actions/course";
import style from "./SearchStyle.module.css";
import { Link } from "react-router-dom";
// antd
import { Input } from "antd";

const { Search } = Input;

class SearchCourse extends Component {
  componentDidMount() {
    this.onSearch();
  }

  onSearch = (value) => {
    this.props.dispatch(fetchCourse(value));
  };

  renderCourseResult = () => {
    return this.props.searchList.map((item, index) => {
      return (
        <div className={style.courseSearch__item}>
          <div className={style.courseSearch__card} key={index}>
            <img src={item.hinhAnh} />
            <h3 className={style.courseSearch__header}>{item.tenKhoaHoc}</h3>
            <p>{item.nguoiTao.hoTen}</p>
            <p>Rating</p>
            <Link
              to={`/detail/${item.maKhoaHoc}`}
              className="btn btn-secondary"
            >
              Go to detail
            </Link>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className={style.courseSearch__container}>
        <div className={style.searchBar}>
          <Search
            placeholder="Tìm khóa học"
            onSearch={this.onSearch}
            allowClear
            type="primary"
            size="large"
          />
        </div>
        {this.renderCourseResult()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchList: state.course.courses,
});

export default connect(mapStateToProps)(SearchCourse);
