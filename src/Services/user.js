import Axios from "axios";
import { TOKEN_CYBERSOFT_ELEARNING } from "../util/setting";
import * as yup from "yup";

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Account is required !"),
  matKhau: yup.string().required("Password is required !"),
  hoTen: yup.string().required("Fullname is required !"),
  email: yup
    .string()
    .required("Email is required !")
    .email("Email is invalid !"),
  soDT: yup
    .string()
    .matches(/^[0-9]+$/)
    .required("PhoneNumber is required !"),
  maNhom: yup.string().required("ID is required !"),
});

class UserService {
  signUp(data) {
    return Axios({
      method: "POST",
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
      headers: {
        "TokenCybersoft": TOKEN_CYBERSOFT_ELEARNING,
      },
    });
  }
  signIn(user) {
    return Axios({
      method: "POST",
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
      headers: {
        "TokenCybersoft": TOKEN_CYBERSOFT_ELEARNING,
      },
    });
  }
}

export default UserService;
