import Axios from "axios";
import { TOKEN_CYBERSOFT_ELEARNING } from "../util/setting";

class CourseService {
  fetchCourse(tenKhoaHoc = '') {
    if (tenKhoaHoc.trim() !== '') {
      return Axios({
        url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP01`,
        method: "GET",
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT_ELEARNING,
        },
      });
    }
    return Axios({
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT_ELEARNING,
      },
    });
  }

  fetchCourseDetail(id) {
    return Axios({
      url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT_ELEARNING,
      },
    });
  }

  fetchCourseList() {
    return Axios({
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT_ELEARNING,
      },
    });
  }

  fetchCourseMenu(id) {
    return Axios({
      url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP01`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT_ELEARNING,
      },
    });
  }
}
export default CourseService;
