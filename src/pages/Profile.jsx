import React from "react";
import "./styles/profile.css";
import profile_bg from "../images/candle-chart.jpg"
import { Link } from "react-router-dom";
import profile_img from "../images/profile.jpg";
import History from "../components/deposit-withdraw/History";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const profile = () => {
     return(
        <>
         <Navbar/>
           <div className="profile-page">
            <div className="container-fluid">
               <div className="row mt-5">
                  <div className="col-lg-4 col-md-5 col-12 mb-3">
                            {/* <!--Profile Card--> */}
                     
                        <div class="card profile-card-3" data-aos="fade-up" data-aos-delay="300">
                           <div class="background-block">
                                 <img src={profile_bg} alt="profile-sample1" class="background"/>
                           </div>
                           <div class="profile-thumb-block">
                                 <img src={profile_img} alt="profile" class="profile"/>
                           </div>
                           <div class="card-content">
                              <h2>Justin Mccoy</h2>
                              <p>Current Balance: <strong>$1500</strong></p>
                           </div>
                        </div>
            
                  </div>
                      {/* Account Details */}
                  <div className="col-lg-8 col-md-7 col-12 mb-3" >
                     <h2 className="text-blue text-center" data-aos="fade-down" data-aos-delay="300">Account Details</h2>
                     <div className="row account-details" data-aos="fade-left" data-aos-delay="300">
                        <div className="col-6">
                          <h5>Balance: <strong>$1500</strong></h5>
                          <h5>Total Spent: <strong>$3500</strong></h5>
                          <h5>Total Profit: <strong>$1800</strong></h5>
                          <h5>Last Deposit: <strong className="text-success">$300</strong></h5>
                          <h5>Last Withdrawn: <strong className="text-danger">$700</strong></h5>
                        </div>

                        <div className="col-6">
                          <h5>Current Plan: <strong className="text-success">Pro</strong> <span className="small">(Monthly) </span></h5>
                          <h5>Plan Limit: <strong>$100 to $10,000</strong></h5>
                          <h5>Current Trade: <strong>$500</strong></h5>
                          <h5>Running Profit: <strong>$100</strong></h5>
                          <h5>Last Deposit: <strong>$300</strong></h5>
                        </div>
                     </div>
                     <div className="row text-align-middle profile-links">
                           <div className="col-lg-3 col-md-4 col-4 py-2 text-center" data-aos="fade-up" data-aos-delay="300">
                           <Link className="btn-blue" to={"/deposit"}>Deposit</Link>
                           </div>
                           <div className="col-lg-3 col-md-4 col-4 py-2 text-center" data-aos="fade-up" data-aos-delay="300">
                           <Link className="btn-blue" to={"/withdraw"}>Withdraw</Link>
                           </div>
                           <div className="col-lg-3 col-md-4 col-4 py-2 text-center" data-aos="fade-up" data-aos-delay="300">
                           <Link className="btn-blue" to={"/plans"}>Plans</Link>
                           </div>
                           <div className="col-lg-3 col-md-4 col-4 py-2 text-center" data-aos="fade-up" data-aos-delay="300">
                           <Link className="btn-blue" to={"/help"}>Help</Link>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="row pt-5 pb-3">
                  <div className="col-12" >
                    <History/>
                  </div>
               </div>
            </div>
           </div>
         <Footer/>
        </>
        
     );
}

export default profile;