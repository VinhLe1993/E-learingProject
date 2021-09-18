import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// Style
import style from "./CourseItemStyle.module.css"

class CourseItem extends Component {
    render() {
        return (
            <div className={style.courseItem__card}>
                <img src={this.props.item.hinhAnh} className={style.courseItem__img} />
                <h3 className={style.courseItem__header}>{this.props.item.tenKhoaHoc}</h3>
                <p className="lead">{this.props.item.nguoiTao.hoTen}</p>
                <p className="lead">Rating: 5.0</p>
                <Link to={`/detail/${this.props.item.maKhoaHoc}`} className="btn btn-secondary">Xem chi tiết</Link>
            </div>
        )
    }
}

export default CourseItem 
