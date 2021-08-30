import { createAction } from ".";
import { courseService } from "../../Services";
import { FETCH_COURSES } from "./type";
//Async action

export const fetchCourse = () => {
  return (dispatch) => {
    courseService
      .fetchCourse()
      .then((res) => {
        dispatch(createAction(FETCH_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
