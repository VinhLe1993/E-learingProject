import React, { Component } from 'react'

class CourseItem extends Component {
    render() {
        return (
            <div className="card p-2">
                <img />
                <p className="lead font-weight-bold">ReactJS Bootcamp</p>
                <p className="lead">Instructor: Steve Roger</p>
                <p className="lead">Rating: 5.0</p>
                <button className="btn btn-success">Go to detail</button>
            </div>
        )
    }
}

export default CourseItem
