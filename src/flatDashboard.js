import NavFlat from "./navFlat";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FlatDashboard()
{
    useEffect(() => {
        if(sessionStorage.getItem("usr_id")==null)
        {
          window.location.href="/";
        }
        getDetails();

      });

      const [posdate, setposdate] = useState("");
      const [totalAmount, setTotalAmount] = useState("");
      const [paid_amount, setPaidAmount] = useState("");
      const [next_installment, setNextInstallment] = useState("");
      const [name, setName] = useState("");

     async function getDetails()
      {
        const data=await axios.get(`http://localhost:8080/flat/${sessionStorage.getItem("usr_id")}`, {
            



        });
        console.log(data);
        setTotalAmount(data.data.total_amount);
        setPaidAmount(data.data.paid_amount);
        setNextInstallment(data.data.next_installment);
        setposdate(data.data.possesion_Date);
        setName(data.data.usr_Name);
        
      }

    return(
        <div>

<div className="container-fluid">
            <div className="row">
               <NavFlat></NavFlat>
            </div>
            <div className="row text-center">
              <h1>Welcome {name}</h1>
            </div>
            <div className="row mt-3 ms-3">

                <div className="col">
        
                    <div className="card text-black bg-light mb-3" style={{maxWidth: "18rem"}}>
                   
                        <div className="card-body text-center">
                          <h5 className="card-title">Possesion Date</h5>
                          <p className="card-text">{posdate}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-black bg-light mb-3" style={{maxWidth: "18rem"}}>
                   
                        <div className="card-body text-center">
                          <h5 className="card-title">Total Amount</h5>
                          <p className="card-text">Rs {totalAmount}</p>
                        </div>
                    </div>
        
                </div>
                <div className="col">
        
                    <div className="card text-black bg-light mb-3" style={{maxWidth: "18rem"}}>
                   
                        <div className="card-body text-center">
                          <h5 className="card-title">Paid Amount</h5>
                          <p className="card-text">Rs {paid_amount}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
        
                    <div className="card text-black bg-light mb-3" style={{maxWidth: "18rem"}}>
                   
                        <div className="card-body text-center">
                          <h5 className="card-title">Next Installment</h5>
                          <p className="card-text">Rs {next_installment}</p>
                        </div>
                    </div>
                </div>
        
               
                
            </div>
            <div className="row">
                <div className="col-2">

                </div>
                <div className=" col-8">

                </div>
                <div className="col-2">
                    
                </div>
            </div>

        </div>
        </div>
    );
}