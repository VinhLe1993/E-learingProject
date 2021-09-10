import { createAction } from ".";
import { courseService } from "../../Services";
import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "./type";
//Async action

export const fetchCourse = () => {
  return (dispatch) => {
    courseService
      .fetchCourse()
      .then((res) => {
        dispatch(createAction(FETCH_COURSES, res.data.slice(0,8) ));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchDetailCourse = (id) => {
  return dispatch => {
    courseService
      .fetchCourseDetail(id)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}