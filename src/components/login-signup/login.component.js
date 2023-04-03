import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import getDeviceId from "../getDeviceId/getDeviceId";
import Navbar from "../navbar/Navbar";
import "./login-signup.css";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { useQueryClient } from "@tanstack/react-query";
const Login = () => {

  const queryClient = useQueryClient()
  const navigate = useNavigate();
  // const [values, setValues] = useState({
  //   password: "",
  //   showPassword: false,
  // });

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault(isCursorAtEnd());

  // };

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  const initialValues = {
    email: "",
    password: "",
  }

  const {
    values,
    handleBlur,
    setValues,
    handleChange,
    handleSubmit,
    submitForm,
    isSubmitting,
    resetForm,
    errors,
    touched,
  } = useFormik({
    initialValues,
    // validationSchema: signupSchema,
    validateOnChange: true,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: async (values, action) => {
      const toastId = toast.loading('logging In...')
      try {
        const data = new FormData();
        data.append('email', values.email);
        data.append('password', values.password);
        data.append('device_id', getDeviceId());

        var config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://waliexchange.com/api2/public/index.php/customer_login',
          data: data
        };

        axios(config)
          .then(function (response) {
            console.log(response)

            if (response.data.status === 400) {
              toast.error(response.data.msg, { id: toastId })
            }

            if (response.data.status === 200) {
              toast.success('Logged In Successfully!', { id: toastId })
              localStorage.setItem('waliexchange', JSON.stringify(response.data.msg))
              navigate("/")
            }
          })
          .catch(function (error) {
            console.log(error);
            toast.error(error.message, { id: toastId })
          });

      } catch (err) {
        toast.error("There was an error, Please try later.", { id: toastId })
        console.log(err)
      }
    },
  })

  return (
    <>
      <Navbar />
      <div>
        <div className="container-fluid">
          <div className="row justify-content-end login-bg py-5">
            <div className="col-lg-5 col-md-6 col-12 p-3 mx-lg-1 mx-md-1 mx-auto" data-aos="fade-left" data-aos-delay="300">
              <div className="mx-lg-3 mx-md-3 mx-1 form-box-shadow">

                <form onSubmit={(event) => handleSubmit(event)} className="p-3" action="">
                  <h3 className="text-blue text-center" data-aos="fade-down" data-aos-delay="300">Sign In</h3>
                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="mb-3 input-password">
                    <label>Password</label>
                    <input
                      // type={values.showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      className="form-control"
                      placeholder="Enter password"
                    />
                    <span className="btn eye-btn"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ?
                        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4Zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm-3-5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3Z" clipRule="evenodd"></path>
                        </svg>
                        :
                        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="m2.01 3.87 1.41-1.42L21.15 20.2l-1.41 1.41-3.43-3.43c-1.34.52-2.79.82-4.31.82-5 0-9.27-3.11-11-7.5.77-1.97 2.06-3.67 3.69-4.95L2.01 3.87ZM17 11.5c0-2.76-2.24-5-5-5-.51 0-1 .1-1.47.24L8.36 4.57C9.51 4.2 10.73 4 12 4c5 0 9.27 3.11 11 7.49-.69 1.76-1.79 3.3-3.18 4.53l-3.06-3.06c.14-.46.24-.95.24-1.46Zm-5 5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5Zm2.97-5.33a2.97 2.97 0 0 0-2.64-2.64l2.64 2.64Z" clipRule="evenodd"></path>
                        </svg>
                      }
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label className="ms-2 custom-control-label small" htmlFor="customCheck1">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-blue">
                      Submit
                    </button>
                  </div>
                  <p className="forgot-password text-right">
                    Forgot <Link to={'/help'}>Password?</Link>
                  </p>
                  <p className="small mt-3">Don't have an account yet? <Link to={'/sign-up'}>Sign up</Link></p>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>


  );

}
export default Login