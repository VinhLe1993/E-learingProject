import React from "react";
import { useFormik } from "formik";
import { login } from "../../Redux/Actions/user";
import { useDispatch } from "react-redux";

export default function Signin(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = login(values);
      dispatch(action);
      console.log(values);
    },
  });

  return (
    <div className="w-100 d-flex flex-row">
      <div className="d-flex w-50">
        <img
          src="https://picsum.photos/2000"
          className="w-100"
          style={{ height: "100%" }}
        />
      </div>
      <div
        className="w-50 d-flex flex-column justify-content-center 
      align-items-center"
      >
        <h1 className="display-4 text-center w-100 mb-5">Đăng nhập</h1>
        <form
          className="w-75 d-flex flex-column justify-content-center 
        align-items-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="form-group w-50">
            <label>Tài khoản: </label>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group w-50">
            <label>Mật khẩu: </label>
            <input
              type="password"
              className="form-control"
              name="matKhau"
              onChange={formik.handleChange}
            />
          </div>
          <button className="btn btn-success mt-5">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
}
