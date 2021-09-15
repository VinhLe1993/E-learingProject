let initialState = {
  courses: [],
  courseDetail: null,
  coursesList: [],
  coursesMenu: [],
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      state.courses = action.payload;
      return { ...state };
    case "FETCH_COURSE_DETAIL":
      state.courseDetail = action.payload;
      return { ...state };
    case "FETCH_COURSE_LIST":
      state.coursesList = action.payload;
      return { ...state };
    case "FETCH_COURSE_MENU":
      state.coursesMenu = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default CourseReducer;
