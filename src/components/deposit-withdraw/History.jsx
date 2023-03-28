import React from "react";

const History = () => {
    return(
        <>
          <div>
          <h1 className="text-center" data-aos="fade-down" data-aos-delay="300">Transection History</h1>
          <div className="table-responsive table-div mt-3 pt-3" data-aos="fade-up" data-aos-delay="300">
          <table className="mb-3" >
                <tr>
                    <th className="text-blue">Walet Addesss</th>
                    <th className="text-blue">Transection Type</th>
                    <th className="text-blue">Date</th>
                    <th className="text-blue">Amount</th>
                </tr>
                <tr>
                    <td>042E6EFFCA888036CE13D7201AB58F567A</td>
                    <td>Withdraw</td>
                    <td>20-09-2022</td>
                    <td className="text-danger"><strong>$700</strong></td>
                </tr>
                <tr>
                    <td>13D7201AB58F567A042E6EFFCA888036CE</td>
                    <td>Deposit</td>
                    <td>10-09-2022</td>
                    <td className="text-success"><strong>$300</strong></td>
                </tr>
                <tr>
                    <td>042E6EFFCA888036CE13D7201AB58F567A</td>
                    <td>Withdraw</td>
                    <td>20-09-2022</td>
                    <td className="text-danger"><strong>$500</strong></td>
                </tr>
                <tr>
                    <td>13D7201AB58F567A042E6EFFCA888036CE</td>
                    <td>Deposit</td>
                    <td>10-09-2022</td>
                    <td className="text-success"><strong>$1500</strong></td>
                </tr>
               
                </table>
          </div>
                
          </div>
        </>
    );
}
export default History