import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems";
import Axios from "axios";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh sách khóa học</h1>
        <div className="container">
          <div class="row">
            <div className="col-3">
              <CourseItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default HomeScreen;
