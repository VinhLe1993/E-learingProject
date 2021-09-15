import React, { Component } from 'react'
import style from "./style.module.css"
import Logo from "../../Assets/Images/logo.png";

class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>
          <div className={style.footer__item}>
            <div className={style.item__info}>
              <a>
                <img src={Logo} />
              </a>
              <h4 className={style.item__info__header}>
                CyberSoft Academy - Hệ thống đào tạo lập trình chuyên sâu theo
                dự án thực tế
              </h4>
            </div>
            <div className={style.item__form}>
              <h3>Nhận tin sự kiện & và khuyến mãi</h3>
              
            </div>
            <div className={style.item__form__email}>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="your.address@email.com"
              />
              <button className="btn btn-secondary">Đăng kí</button>
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
              <button type="button" className="btn btn-secondary">
                Đăng ký tư vấn
              </button>
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
            <div className={style.item__contact__social}>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
            </div>
          </div>
        </div>
        )
    }
}

export default (Footer)