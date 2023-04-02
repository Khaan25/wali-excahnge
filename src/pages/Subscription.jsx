import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react"
import { toast } from "react-hot-toast"
import mobile_card_1 from "../images/mobile-card-1.png"
import mobile_card_2 from "../images/mobile-card-2.png"
import mobile_card_3 from "../images/mobile-card-3.png"
import mobile_card_4 from "../images/mobile-card-4.png"
import mobile_card_5 from "../images/mobile-card-5.png"

const Subscription = () => {
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
    url: "http://waliexchange.com/api2/public/index.php/wx_get_pkg",
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
      url: "http://waliexchange.com/api2/public/index.php/wx_purchase_pkg",
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
  )
}

export default Subscription
