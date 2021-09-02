import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signupUserSchema } from "../../Services/user";
import { userService } from "../../Services";

class SignupScreen extends Component {
  handleSubmit = (values) => {
    userService
      .signUp(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="w-100">
        <div className="d-flex">
          <img
            src="https://picsum.photos/2000"
            className="w-50" 
            style={{ height: "100%" }}
          />
          <div
            className="w-50 d-flex flex-column justify-content-center 
      align-items-center"
          >
            <h1 className="display-4 text-center w-100 mb-5">Đăng kí</h1>
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                email: "",
                soDT: "",
                maNhom: "GP01",
              }}
              validationSchema={signupUserSchema}
              onSubmit={this.handleSubmit}
              render={(formikProps) => (
                <Form
                  className="w-50 mx-auto"
                  
                >
                  <div className="form-group">
                    <label>Tài khoản: </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="taiKhoan"
                      onChange={formikProps.handleChange}
                    />
                    <ErrorMessage name="taiKhoan">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Mật khẩu: </label>
                    <Field
                      type="password"
                      className="form-control"
                      name="matKhau"
                      onChange={formikProps.handleChange}
                    />
                    <ErrorMessage name="matKhau">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Họ tên: </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="hoTen"
                      onChange={formikProps.handleChange}
                    />
                    <ErrorMessage name="hoTen">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Email: </label>
                    <Field
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={formikProps.handleChange}
                    />
                    <ErrorMessage name="email">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại: </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="soDT"
                      onChange={formikProps.handleChange}
                    />
                    <ErrorMessage name="soDT">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Mã nhóm: </label>
                    <Field
                      component="select"
                      className="form-control"
                      name="maNhom"
                      onChange={formikProps.handleChange}
                    >
                      <option>GP01</option>
                      <option>GP02</option>
                      <option>GP03</option>
                      <option>GP04</option>
                      <option>GP05</option>
                      <option>GP06</option>
                      <option>GP07</option>
                      <option>GP08</option>
                      <option>GP09</option>
                      <option>GP10</option>
                    </Field>
                    <ErrorMessage name="maNhom">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-success mt-5 w-100">
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupScreen;
