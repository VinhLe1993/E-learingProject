import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCourse } from "../../Redux/Actions/course";
//Style
import Logo from "../../Assets/Images/logo.png";
import style from "./HomeStyle.module.css";
// Ant
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

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
        <div className={style.footer}>
          <div className={style.footer__item}>
            <div className={style.item__info}>
              <a>
                <img src={Logo} />
              </a>
              <h3 className={style.item__info__header}>
                CyberSoft Academy - Hệ thống đào tạo lập trình chuyên sâu theo
                dự án thực tế
              </h3>
            </div>
           
          </div>
          <div className={style.footer__item}>
            <div className={style.item__form}>
              <h3>Đăng kí tư vấn</h3>
              <input
                type="text"
                className="form-control"
                placeholder="Họ và tên"
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email liên hệ"
              />
              <input
                type="number"
                name="soDienThoai"
                placeholder="Số điện thoại liên hệ"
                className="form-control"
              />
              <button type="button" className="btn btn-outline-primary">
                Đăng kí tư vấn
              </button>
            </div>
            <div className={style.item__form}>
              <h3>Nhận tin sự kiện & và khuyến mãi</h3>
              
            </div>
            <div className={style.item__form}>
              <input
                type="email"
                name="email"
                placeholder="your.address@email.com"
              />
              <button>Đăng kí</button>
            </div>
          </div>
          <div className={style.footer__item}>
            <div className={style.item__contact}>
              <h3>Liên Hệ với chúng tôi</h3>

              <p>
                <i class="fas fa-map-marker-alt"></i>
                Cơ sở 1: 376 Võ Văn Tần - Quận 3
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i>
                Cơ sở 2: 459 Sư Vạn Hạnh - Quận 10
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i>
                Cơ sở 3: 82 Ung Văn Khiêm - Quận Bình Thạnh
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i>
                Cơ sở 4: Đà Nẵng - Quận Hải Châu
              </p>
              <p>
                <i class="fas fa-phone-alt"></i>
                096.105.1014 - 098.407.5835
              </p>
            </div>
            <div className={style.item__info}>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
            </div>
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
