import { createAction } from ".";
import { courseService } from "../../Services";
import {
  FETCH_COURSE_DETAIL,
  FETCH_COURSES,
  FETCH_COURSE_LIST,
  FETCH_COURSE_MENU,
} from "./type";
//Async action

export const fetchCourse = () => {
  return (dispatch) => {
    courseService
      .fetchCourse()
      .then((res) => {
        dispatch(createAction(FETCH_COURSES, res.data.slice(0, 8)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCourseList = () => {
  return (dispatch) => {
    courseService
      .fetchCourseList()
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_LIST, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchDetailCourse = (id) => {
  return (dispatch) => {
    courseService
      .fetchCourseDetail(id)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCourseMenu = (id) => {
  return (dispatch) => {
    courseService
      .fetchCourseMenu(id)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_MENU, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
