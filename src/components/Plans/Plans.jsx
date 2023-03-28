import React from "react";
import "../../App.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import mobile_card_1 from "../../images/mobile-card-1.png";
import mobile_card_2 from "../../images/mobile-card-2.png";
import mobile_card_3 from "../../images/mobile-card-3.png";
import mobile_card_4 from "../../images/mobile-card-4.png";
import mobile_card_5 from "../../images/mobile-card-5.png";

const Plans = () => {
    return(
        <>
        <Navbar/>
          <div className="plans-page">
          <section>
                  <div className="container-fluid mt-5 mb-3">
                  <h1 className="text-uppercase text-blue text-center" data-aos="fade-down" data-aos-delay="300">subscriptions and plans</h1>
                     <div className="row pt-3 justify-content-around">
                     <div className="col-lg-2 col-md-4 col-10 mb-lg-2 mb-md-3 mb-3 mb-2 m-0 p-0 px-md-1 px-1 ">
                        <div class="card card-border mx-auto bg-transparent">
                           <img src={mobile_card_1} class="card-img-top" data-aos="fade-up" data-aos-delay="200"  alt="Mobile"/>
                              <div class="card-body px-lg-2 px-md-2 px-3">
                              <h3 class="card-title text-blue text-center">Beginner</h3>
                              <ul className="subsciption-details">
                                 <li>Duration: <strong> Monthly</strong></li>
                                 <li>Balance Limit:<small> $100 - $1000</small></li>
                                 <li>Profit Margin:<small> 30%</small></li>
                                 <li>Success Rate:<small> 99%</small></li>
                                 <li>In Case of Loss it will be <small>100%</small> User's accountability</li>
                              </ul>
                              <div className="text-center">
                              <a href="/" class="btn plan-card-btn">Get Now in <small>$250</small></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-2 col-md-4 col-10 mb-lg-2 mb-md-3 mb-3 m-0 p-0 px-md-1 px-1">
                        <div class="card card-border mx-auto bg-transparent">
                        <img src={mobile_card_2} class="card-img-top" data-aos="fade-up" data-aos-delay="300" alt="Mobile"/>
                           <div class="card-body px-lg-2 px-md-2 px-3">
                              <h3 class="card-title text-blue text-center">Pro</h3>
                              <ul className="subsciption-details">
                                 <li>Duration: <strong> Monthly</strong></li>
                                 <li>Balance Limit:<small> $100 - $10,000</small></li>
                                 <li>Profit Margin:<small> 30%</small></li>
                                 <li>Success Rate:<small> 99%</small></li>
                                 <li>In Case of Loss it will be <small>100%</small> User's accountability</li>
                              </ul>
                              <div className="text-center">
                              <a href="/" class="btn plan-card-btn">Get Now in <small>$350</small></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-2 col-md-4 col-10 mb-lg-2 mb-md-3 mb-3  m-0 p-0 px-md-1 px-1">
                        <div class="card card-border mx-auto bg-transparent">
                        <img src={mobile_card_3} class="card-img-top" data-aos="fade-up" data-aos-delay="400" alt="Mobile"/>
                           <div class="card-body px-lg-2 px-md-2 px-3">
                              <h3 class="card-title text-blue text-center">Beginner</h3>
                              <ul className="subsciption-details">
                                 <li>Duration: <strong> Yearly</strong></li>
                                 <li>Balance Limit:<small> $100 - $1000</small></li>
                                 <li>Profit Margin:<small> 30%</small></li>
                                 <li>Success Rate:<small> 99%</small></li>
                                 <li>In Case of Loss it will be <small>100%</small> User's accountability</li>
                              </ul>
                              <div className="text-center">
                              <a href="/" class="btn plan-card-btn">Get Now in <small>$2999.99</small></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-2 col-md-4 col-10 mb-lg-2 mb-md-3 mb-3  m-0 p-0 px-md-1 px-1">
                        <div class="card card-border mx-auto bg-transparent">
                        <img src={mobile_card_4} class="card-img-top" data-aos="fade-up" data-aos-delay="500"  alt="Mobile"/>
                          <div class="card-body px-lg-2 px-md-2 px-3">
                          <h3 class="card-title text-blue text-center">Intermediate</h3>
                              <ul className="subsciption-details">
                                 <li>Duration: <strong> Yearly</strong></li>
                                 <li>Balance Limit:<small> $100 - $10,000</small></li>
                                 <li>Profit Margin:<small> 30%</small></li>
                                 <li>Success Rate:<small> 99%</small></li>
                                 <li>In Case of Loss it will be <small>100%</small> User's accountability</li>
                              </ul>
                              <div className="text-center">
                              <a href="/" class="btn plan-card-btn">Get Now in <small>$4200</small></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-2 col-md-4 col-10 mb-lg-2 mb-md-3 mb-3  m-0 p-0 px-md-1 px-1">
                        <div class="card card-border mx-auto bg-transparent">
                        <img src={mobile_card_5} class="card-img-top" data-aos="fade-up" data-aos-delay="600" alt="Mobile"/>
                          <div class="card-body px-lg-2 px-md-2 px-3">
                              <h3 class="card-title text-blue text-center"> Pro </h3>
                              <ul className="subsciption-details">
                                 <li>Duration: <strong> Yearly</strong></li>
                                 <li>Balance Limit:<small> $100 - $100,000</small></li>
                                 <li>Profit Margin:<small> 30%</small></li>
                                 <li>Success Rate:<small> 99%</small></li>
                                 <li>In Case of Loss it will be <small>100%</small> User's accountability</li>
                              </ul>
                              <div className="text-center">
                              <a href="/" class="btn plan-card-btn">Get Now in <small>$6000</small></a>
                              </div>
                           </div>
                        </div>
                     </div>
                       
                     </div>
                  </div>
               </section>

          </div>
          <Footer/>
        </>
    );
}
export default Plans;