import React, { useState } from "react";
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import { Link } from "react-router-dom";
import "./login-signup.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
 const SignUp = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault(isCursorAtEnd());
  
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
        return (

          <>
          <Navbar/>
            <div>
                    <div className="container-fluid ">
                        <div className="row justify-content-end signup-bg py-5">
                            <div className="col-lg-5 col-md-6 col-12 p-3 mx-lg-1 mx-md-1 mx-auto" data-aos="fade-left" data-aos-delay="300">
                            <div className="mx-lg-3 mx-md-3 mx-1 form-box-shadow">

                               <form className="p-3">
                                  <h3 className="text-blue text-center" data-aos="fade-down" data-aos-delay="300">Sign Up</h3>
                                  <div className="mb-3">
                                    <label>First name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="First name"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" placeholder="Last name" />
                                  </div>
                                  <div className="mb-3">
                                    <label>Email address</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      placeholder="Enter email"
                                    />
                                  </div>
                                  <div className="mb-3 input-password">
                                    <label>Password</label>
                                    <input
                                      type={values.showPassword ? "text" : "password"}
                                      onChange={handlePasswordChange("password")}
                                      value={values.password}
                                      // type="password"
                                      className="form-control"
                                      placeholder="Enter password"
                                    />
                                    <span className="btn eye-btn"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                  >
                                    {values.showPassword ? 
                                        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4Zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm-3-5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3Z" clip-rule="evenodd"></path>
                                        </svg>
                                      : 
                                      <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="m2.01 3.87 1.41-1.42L21.15 20.2l-1.41 1.41-3.43-3.43c-1.34.52-2.79.82-4.31.82-5 0-9.27-3.11-11-7.5.77-1.97 2.06-3.67 3.69-4.95L2.01 3.87ZM17 11.5c0-2.76-2.24-5-5-5-.51 0-1 .1-1.47.24L8.36 4.57C9.51 4.2 10.73 4 12 4c5 0 9.27 3.11 11 7.49-.69 1.76-1.79 3.3-3.18 4.53l-3.06-3.06c.14-.46.24-.95.24-1.46Zm-5 5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5Zm2.97-5.33a2.97 2.97 0 0 0-2.64-2.64l2.64 2.64Z" clip-rule="evenodd"></path>
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
                                      Agree to Our <Link to={"/disclaimer"}>Terms of Service</Link>
                                    </label>
                                  </div>
                                </div>
                                  <div className="d-grid">
                                    <button type="submit" className="btn btn-blue">
                                      Sign Up
                                    </button>
                                  </div>
                                  <p className="forgot-password text-right">
                                    Already registered <Link to={"/sign-in"}>sign in?</Link>
                                  </p>
                                </form>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
          </>
           
        );   
}
export default SignUp;