import React, { useState } from "react"
import "./styles/home.css"
import Footer from "../components/footer/Footer"
import { Link } from "react-router-dom"
import bitcoin from "../images/coins.jpg"
import user from "../images/user.jpg"
import mobile_card_1 from "../images/mobile-card-1.png"
import mobile_card_2 from "../images/mobile-card-2.png"
import mobile_card_3 from "../images/mobile-card-3.png"
import mobile_card_4 from "../images/mobile-card-4.png"
import mobile_card_5 from "../images/mobile-card-5.png"
// import mobiles from "../images/mobile-group-1.png";
import mobiles from "../images/mobile-group-2.png"
import Navbar from "../components/navbar/Navbar"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
// import Plans from "../components/Plans/Plans";

const Home = () => {
  const formData = new FormData()
  formData.append(
    "cust_id",
    JSON.parse(localStorage.getItem("waliexchange")).cust_id
  )
  formData.append("new_pass", JSON.parse(localStorage.getItem("wali")).password)
  formData.append("confirm_pass", "new-password")

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://waliexchange.com/api2/public/index.php/wx_get_pkg",
    data: formData,
  }

  const subsQuery = useQuery({
    queryKey: ["subs"],
    keepPreviousData: true,
    queryFn: () =>
      axios(config).then(function (response) {
        return response.data.msg
      }),
    onError: (err) => {
      console.log(err)
      toast.error("There was an error while loading packages.")
    },
  })
  const { data, isLoading, isError } = subsQuery

  const [first, second, third, fourth, fifth] = data || []

  const BuyPackage = (pkg_id) => {
    var data = new FormData()
    data.append(
      "cust_id",
      JSON.parse(localStorage.getItem("waliexchange")).cust_id
    )
    data.append("pkg_id", pkg_id)

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://waliexchange.com/api2/public/index.php/wx_purchase_pkg",
      data: data,
    }

    axios(config)
      .then(function (response) {
        toast.success(response.data.msg)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      <Navbar />
      <div>
        <section className="header-home-bg mb-5">
          <div className="container">
            <div className="row pt-5 ">
              <div className="col-lg-6 col-md-6 col-12 home-header-text">
                <div
                  className="home-header-content pt-lg-5 mt-lg-5 mt-md-5"
                  data-aos="fade-down"
                  data-aos-delay="300">
                  <h5 className="text-uppercase">
                    <i>Introducing</i>
                  </h5>
                  <h1 className="text-uppercase display-3 fw-bold">
                    Wali Exchange
                  </h1>
                  <h5 className="text-uppercase">
                    <i>Your very own crypto currency exchange</i>
                  </h5>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div
                  className="img-layers"
                  data-aos="fade-down"
                  data-aos-delay="300">
                  <img src={mobiles} alt="Mobile" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What is Wali Exchange */}
        <section>
          <div className="container-fluid pt-lg-5 pt-md-2 pt-1 ">
            <div className="row ">
              <div className="col-12 col-md-6 col-lg-6 section2-col">
                <div
                  className="img-div"
                  data-aos="fade-left"
                  data-aos-delay="300">
                  <img src={bitcoin} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div
                  className="pt-lg-0 pt-md-0 pt-3"
                  data-aos="fade-right"
                  data-aos-delay="300">
                  <h2 className="text-uppercase fw-bold text-blue heading-home">
                    What is Wali Exchange?
                  </h2>
                  <p className="text-home">
                    Wali Exchange is a financial platform where you can invest
                    your money/Bitcoin and earn Profit. Brokerage services by
                    Wali Exchange, member can get Bitcoin services provided by
                    Block, Inc. Investing involves risk; you may lose money.
                    Wali Exchange Investing trade bitcoin and Block, Inc. is not
                    a member of FINRA or SIPC. For additional information, see
                    the Bitcoin and Wali Exchange Investing disclosures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features */}
        <section>
          <div className="container-fluid pt-5">
            <div className="row features-max-height">
              <div
                className="col-lg-6 col-md-6 col-12 features"
                data-aos="fade-left"
                data-aos-delay="300">
                <h2 className="text-uppercase fw-bold text-blue">
                  Benefits and Features
                </h2>
                <p className="text-home">
                  These are the main Features of Wali Exchange.
                </p>
                <ul className="text-home">
                  <li>Investment Opportunity</li>
                  <li>Multiple investment plans</li>
                  <li>Best Profit margins</li>
                  <li>Privacy and security by default</li>
                  <li>Deposit and widthdrawals in seconds</li>
                  <li>Minimum loss rate</li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div
                  className=" user-img text-end"
                  data-aos="fade-right"
                  data-aos-delay="300">
                  <img src={user} alt="User" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Subscription Plans Section */}
        <section>
          <div className="container-fluid mt-5 mb-3">
            <h1
              className="text-uppercase text-blue text-center"
              data-aos="fade-down"
              data-aos-delay="300">
              subscriptions and plans
            </h1>
            <div className="row pt-3 justify-content-around">
              <div className="col-lg-2 col-md-4 col-10 mb-lg-2 mb-md-3 mb-3 mb-2 m-0 p-0 px-md-1 px-1 ">
                <div className="card card-border mx-auto bg-transparent">
                  <img
                    src={mobile_card_1}
                    className="card-img-top"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    alt="Mobile"
                  />
                  <div className="card-body px-lg-2 px-md-2 px-3">
                    <h3 className="card-title text-blue text-center">
                      {first?.pkg_name}
                    </h3>
                    <ul className="subsciption-details">
                      <li>
                        Duration: <strong> Monthly</strong>
                      </li>
                      <li>
                        Balance Limit:<small> $100 - $1000</small>
                      </li>
                      <li>
                        Profit Margin:<small> 30%</small>
                      </li>
                      <li>
                        Success Rate:<small> 99%</small>
                      </li>
                      <li>
                        In Case of Loss it will be <small>100%</small> User's
                        accountability
                      </li>
                    </ul>
                    <div className="text-center">
                      <button
                        onClick={() => BuyPackage(first.pkg_id)}
                        className="btn plan-card-btn">
                        Get Now in <small>${first?.price}</small>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-10 mb-lg-2 mb-md-3 mb-3 m-0 p-0 px-md-1 px-1">
                <div className="card card-border mx-auto bg-transparent">
                  <img
                    src={mobile_card_2}
                    className="card-img-top"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    alt="Mobile"
                  />
                  <div className="card-body px-lg-2 px-md-2 px-3">
                    <h3 className="card-title text-blue text-center">
                      {second?.pkg_name}
                    </h3>
                    <ul className="subsciption-details">
                      <li>
                        Duration: <strong> Monthly</strong>
                      </li>
                      <li>
                        Balance Limit:<small> $100 - $10,000</small>
                      </li>
                      <li>
                        Profit Margin:<small> 30%</small>
                      </li>
                      <li>
                        Success Rate:<small> 99%</small>
                      </li>
                      <li>
                        In Case of Loss it will be <small>100%</small> User's
                        accountability
                      </li>
                    </ul>
                    <div className="text-center">
                      <button
                        onClick={() => BuyPackage(second.pkg_id)}
                        className="btn plan-card-btn">
                        Get Now in <small>${second?.price}</small>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-10 mb-lg-2 mb-md-3 mb-3  m-0 p-0 px-md-1 px-1">
                <div className="card card-border mx-auto bg-transparent">
                  <img
                    src={mobile_card_3}
                    className="card-img-top"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    alt="Mobile"
                  />
                  <div className="card-body px-lg-2 px-md-2 px-3">
                    <h3 className="card-title text-blue text-center">
                      {third?.pkg_name}
                    </h3>
                    <ul className="subsciption-details">
                      <li>
                        Duration: <strong> Yearly</strong>
                      </li>
                      <li>
                        Balance Limit:<small> $100 - $1000</small>
                      </li>
                      <li>
                        Profit Margin:<small> 30%</small>
                      </li>
                      <li>
                        Success Rate:<small> 99%</small>
                      </li>
                      <li>
                        In Case of Loss it will be <small>100%</small> User's
                        accountability
                      </li>
                    </ul>
                    <div className="text-center">
                      <button
                        onClick={() => BuyPackage(third.pkg_id)}
                        href="/"
                        className="btn plan-card-btn">
                        Get Now in <small>${third?.price}</small>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-10 mb-lg-2 mb-md-3 mb-3  m-0 p-0 px-md-1 px-1">
                <div className="card card-border mx-auto bg-transparent">
                  <img
                    src={mobile_card_4}
                    className="card-img-top"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    alt="Mobile"
                  />
                  <div className="card-body px-lg-2 px-md-2 px-3">
                    <h3 className="card-title text-blue text-center">
                      {fourth?.pkg_name}
                    </h3>
                    <ul className="subsciption-details">
                      <li>
                        Duration: <strong> Yearly</strong>
                      </li>
                      <li>
                        Balance Limit:<small> $100 - $10,000</small>
                      </li>
                      <li>
                        Profit Margin:<small> 30%</small>
                      </li>
                      <li>
                        Success Rate:<small> 99%</small>
                      </li>
                      <li>
                        In Case of Loss it will be <small>100%</small> User's
                        accountability
                      </li>
                    </ul>
                    <div className="text-center">
                      <button
                        onClick={() => BuyPackage(fourth.pkg_id)}
                        className="btn plan-card-btn">
                        Get Now in <small>${fourth?.price}</small>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-10 mb-lg-2 mb-md-3 mb-3  m-0 p-0 px-md-1 px-1">
                <div className="card card-border mx-auto bg-transparent">
                  <img
                    src={mobile_card_5}
                    className="card-img-top"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    alt="Mobile"
                  />
                  <div className="card-body px-lg-2 px-md-2 px-3">
                    <h3 className="card-title text-blue text-center">
                      {" "}
                      {second?.pkg_name}{" "}
                    </h3>
                    <ul className="subsciption-details">
                      <li>
                        Duration: <strong> Yearly</strong>
                      </li>
                      <li>
                        Balance Limit:<small> $100 - $100,000</small>
                      </li>
                      <li>
                        Profit Margin:<small> 30%</small>
                      </li>
                      <li>
                        Success Rate:<small> 99%</small>
                      </li>
                      <li>
                        In Case of Loss it will be <small>100%</small> User's
                        accountability
                      </li>
                    </ul>
                    <div className="text-center">
                      <button
                        onClick={() => BuyPackage(fifth.pkg_id)}
                        className="btn plan-card-btn">
                        Get Now in <small>${fifth?.price}</small>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Plans/> */}
        <section>
          <div className="container-fluid">
            <div className="row">
              {/* Terms of service  */}
              <div
                className="col-lg-4 col-md-6 col-10 mx-auto mb-3"
                data-aos="fade-up"
                data-aos-delay="300">
                <Link
                  className="btn btn-blue text-uppercase w-100"
                  to="/disclaimer">
                  Our Trade Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
export default Home
