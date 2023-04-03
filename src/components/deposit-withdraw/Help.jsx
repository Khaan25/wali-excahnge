import { isCursorAtEnd } from "@testing-library/user-event/dist/utils"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import "./help.css"
import axios from "axios"

export default function Help() {
  const [email, setEmail] = useState("")
  const [showStatus, setShowStatus] = useState("")
  const [error, setError] = useState("")

  const handleForgetPassword = () => {
    console.log("handel forget", email)
    axios
      .post(
        "https://waliexchange.com/api2/public/index.php/forgotUserPwd",
        { email },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log(response.data)
        if (response.data.status === 400) {
          setError(response.data.message)

          setTimeout(() => {
            setError('')
          }, 1000);
        }

        if (response.data.status === 200) {
          // navigate('/')
          setShowStatus("Reset Password Code sent to your email")
          
          setTimeout(() => {
            setShowStatus('')
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error)
        setError(error)
      })
  }
  const [value1, setValue1] = useState({
    password2: "",
    showPassword1: false,
  })
  const [value2, setValue2] = useState({
    password2: "",
    showPassword2: false,
  })

  const handleClickShowPassword = () => {
    setValue1({ ...value1, showPassword1: !value1.showPassword1 })
    setValue2({ ...value2, showPassword2: !value2.showPassword2 })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault(isCursorAtEnd())
  }

  const handlePasswordChange = (prop) => (event) => {
    setValue1({ ...value1, [prop]: event.target.value })
    setValue2({ ...value2, [prop]: event.target.value })
  }
  return (
    <>
      <Navbar />
      <div className="container help-page">
        <div className="row py-5">
          <h1
            className="text-center mb-3"
            data-aos="fade-down"
            data-aos-delay="300">
            Help
          </h1>
          <div
            className="col-lg-6 col-md-8 col-10 mx-auto py-4 help-section"
            data-aos="fade-up"
            data-aos-delay="300">
            {/* Request Reset Password Button */}

            <div className="password mt-3 mb-3">
              <label htmlFor="email">Enter you email</label>
              <br />
              <input
                className="w-100 mt-1"
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <button
              onClick={handleForgetPassword}
              className="help-btn text-center btn-blue py-2 fw-bold">
              Request Reset Password
            </button>
            {/* Reset password request error and success message */}
            {showStatus !== "" && (
              <p className=" excetion-msg text-center mt-5 text-success">
                Reset Password code is sent to Your email.{" "}
              </p>
            )}
            {error !== "" && (
              <p className=" excetion-msg text-center mt-5 text-danger">
                Something went wrong try again in a while.
              </p>
            )}
          </div>
        </div>
        <div className="row py-5">
          <div
            className="col-lg-6 col-md-8 col-10 mx-auto py-4 help-section"
            data-aos="fade-down"
            data-aos-delay="300">
            {/* Enter Reset password code and passwords New & Confirm */}
            <form action="">
              <div className="reset-code mb-3">
                <label htmlFor="reset-code">Enter Password Reset Code</label>
                <br />
                <input
                  className="w-100 mt-1"
                  id="reset-code"
                  type=""
                  name="pin"
                  pattern="[0-9]{6}"
                  maxLength="6"
                />
                {/* Excetion message for valid or invalid reset code  */}
                <span className="text-success excetion-msg">
                  Success! Enter New Password Below
                </span>
                <br />
                <span className="text-danger excetion-msg">
                  Failure! Invalid Password Reset Code
                </span>
              </div>
            </form>
            <form action="/help">
              <div className="password mb-3 input-password">
                <label htmlFor="new-password">Enter New Password</label>
                <br />
                <input
                  className="w-100 mt-1 "
                  id="new-password"
                  type={value1.showPassword1 ? "text" : "password"}
                  onChange={handlePasswordChange("password1")}
                  value={value1.password1}
                />
                <span
                  className="btn eye-btn"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {value1.showPassword1 && value2.showPassword2 ? (
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4Zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm-3-5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3Z"
                        clipRule="evenodd"></path>
                    </svg>
                  ) : (
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="m2.01 3.87 1.41-1.42L21.15 20.2l-1.41 1.41-3.43-3.43c-1.34.52-2.79.82-4.31.82-5 0-9.27-3.11-11-7.5.77-1.97 2.06-3.67 3.69-4.95L2.01 3.87ZM17 11.5c0-2.76-2.24-5-5-5-.51 0-1 .1-1.47.24L8.36 4.57C9.51 4.2 10.73 4 12 4c5 0 9.27 3.11 11 7.49-.69 1.76-1.79 3.3-3.18 4.53l-3.06-3.06c.14-.46.24-.95.24-1.46Zm-5 5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5Zm2.97-5.33a2.97 2.97 0 0 0-2.64-2.64l2.64 2.64Z"
                        clipRule="evenodd"></path>
                    </svg>
                  )}
                </span>
              </div>
              <div className="password mb-3">
                <label htmlFor="confirm-new-password">
                  Confirm New Password
                </label>
                <br />
                <input
                  className="w-100 mt-1"
                  id="confirm-new-password"
                  type={value2.showPassword2 ? "text" : "password"}
                  onChange={handlePasswordChange("password2")}
                  value={value2.password2}
                />
              </div>
              <button className="btn btn-blue px-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
