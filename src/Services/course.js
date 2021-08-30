import Axios from "axios";


class CourseService{
    fetchCourse () {
        return  Axios({
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            method: "GET",
          })
    }
    fetchCourseDetail () {
      return  Axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=ITEC%202112",
        method: "GET",
      })
    }
}
export default CourseService