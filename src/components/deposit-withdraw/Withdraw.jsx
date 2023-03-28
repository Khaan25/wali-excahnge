import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./deposit-withdraw.css";

const Withdraw = () => {
    return(
        <>
        <Navbar/>
            <div className="container-fluid deposit-page">
            <div className="row pt-5 pb-5 ">
              <div className="col-lg-6 col-md-8 col-11 mx-auto form-div p-4" data-aos="fade-up" data-aos-delay="300">
              <h1 className="text-center mb-3" data-aos="fade-down" data-aos-delay="300">Withdraw</h1>
              <form action="/withdraw" className="form-deposit">
                <input type="text" placeholder="Wallet Address" />
                <input type="number" placeholder="$ Amaount" />
                <button type="submit" className="btn btn-blue px-5">Widthdraw</button>
             </form>
              </div>


            </div>
           </div>
           <Footer/>
        </>
    );
}
export default  Withdraw;