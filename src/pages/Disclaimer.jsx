import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import "./styles/home.css";

export default function Disclaimer() {
    return(
        <>
        <Navbar/>
            <div className="container">
                <div className="row pt-5">
                <h1 className="text-uppercase text-center" data-aos="fade-up" data-aos-delay="300">Our Trade Disclaimer</h1>
                    <div className="col-12 pt-2">
                    <p data-aos="fade-down" data-aos-delay="300">
                    There is a very high degree of risk involved in trading. Past results are not indicative of
                    future returns. Waliechange.com and all individuals affiliated with this site assume no
                    responsibilities for your trading and investment results. The indicators, strategies, columns,
                    articles and all other features are for educational purposes only and should not be construed as
                    investment advice. Information for stock observations are obtained from sources believed to be
                    reliable, but we do not warrant its completeness or accuracy, or warrant any results from the use
                    of the information. Your use of the stock observations is entirely at your own risk and it is your
                    sole responsibility to evaluate the accuracy, completeness and usefulness of the information.
                    You must assess the risk of any trade with your broker and make your own independent
                    decisions regarding any securities mentioned herein. Affiliates of Wali Exchange LLC may have
                    a position or effect transactions in the securities described herein (or options thereon) and/or
                    otherwise employ trading strategies that may be consistent or inconsistent with the provided
                    strategies
                    </p>
                    <p data-aos="fade-down" data-aos-delay="300">
                    Wali Exchange LLC is providing this site and any related materials (including newsletters,
                    blog post, videos, social media and other communications) for educational purposes only. We
                    are not providing legal, accounting, or financial advisory services, and this is not a solicitation or
                    recommendation to buy or sell any stocks, options, or other financial instruments or
                    investments. At any time there's a loss, wali exchange is not reliable for risk management to the
                    customer. Examples that address specific assets, stocks, options or other financial instrument
                    transactions are for illustrative purposes only and may not represent specific trades or
                    transactions that we have conducted. In fact, we may use examples that are different or the
                    opposite of transactions we have conducted or positions we hold. This site and any information
                    or training therein is also not intended as a solicitation for any future relationship, business or
                    otherwise between the members or participants and the moderators. No express or implied
                    warranties are being made with respect to these services and products.
                    </p>
                    <p data-aos="fade-down" data-aos-delay="300">
                    All investing and trading in the securities market involves risk. Any decision to place trades in
                    the financial markets, including trading in stock or options or other financial instruments, is a
                    personal decision that should only be made after thorough research, including a personal risk
                    and financial assessment, and the engagement of professional assistance to the extent you
                    believe necessary.
                    </p>
                    <h3 className="text-capitalize" data-aos="fade-down" data-aos-delay="300">disclosure</h3>
                    <p data-aos="fade-down" data-aos-delay="300">
                    I understand that Wali Exchange LLC Program will prepare me to actively trade equities
                    for my own account. I understand that this course is not preparation to be a Licensed Broker in
                    the financial industry or will help me get a job.
                    </p>
                    <p data-aos="fade-down" data-aos-delay="300">
                    The Wali Exchange LLC Program should not be construed as a recommendation or an
                    offer to buy or sell any security or the suitability of any investment strategy for a student. The
                    purchase, sale, or advice regarding any security, other financial instrument or system can only
                    be performed by a licensed Industry representative; such as, but not limited to a Broker/Dealer,
                    Introducing Broker, FCM and and/or Registered Investment Advisor. Neither Wali Exchange LLC
                    nor its representatives are licensed to make your such advicements. All purchasers of the Wali
                    Exchange LLC Program or other Wali Exchange LLC Remote Wali Exchange LLC products are
                    encouraged to speak with a licensed representative of their choice regarding the
                    appropriateness of investing/trading or of any particular investment/trading strategy.
                    </p>
                      <Link className="btn btn-blue mb-3 px-5" to="/" >Back to Home Page</Link>
                    </div>
                </div>
            </div>
        </>
    );

}