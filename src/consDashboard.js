
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ConstructionDashboard()
{
  const [data1, setData1] = useState([]);
  const [visitData, setVisitData] = useState([])

  useEffect(() => {
    if(sessionStorage.getItem("C_id")==null)
    {
      window.location.href="/logincons";
    }
    getData();
  });

var retrievedata;
 async function getData()
  {
  await axios.get(`http://localhost:8080/flat/construct/${sessionStorage.getItem("C_id")}`).then(json => setData1(json.data));
  await axios.get(`http://localhost:8080/visitbook/${sessionStorage.getItem("C_id")}`).then(json => setVisitData(json.data))
          
           
       
  }

    return (
        <div>
            
            <div className="container-fluid">
        <div className="row">
        <NavBar></NavBar>

        </div>
        <div className="row" style={{height: "75vh"}}>
           
               

                <div className="col-6 bg-light border border-dark">
                    <div className="row text-center">
                        <h2>Your Flat Owners Details</h2>
                    </div>
                    <div className="row">
        
                        <table className="table">
                          
                            <thead>
                              <tr>
                                <th scope="col">Flat Key</th>
                                <th scope="col">Name</th>
                                <th scope="col">Flat Price</th>
                                <th scope="col">Paid amount</th>
                                <th scope="col">Remaining Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data1.map((item,index)=>(
                                <tr key={index}>
                                <th scope="row">{item.usr_Key}</th>
                                <td>{item.usr_Name}</td>
                                <td>{item.total_amount}</td>
                                <td>{item.paid_amount}</td>
                                <td>{item.total_amount-item.paid_amount}</td>
                              </tr>
                              ))}
                            
                            </tbody>
                          </table>
                    </div>
        
        
        
                </div>
           
           

                <div className="col-6 bg-light border border-dark">
                    <div className="row text-center">
                        <h2>Latest Visit Requests</h2>
                    </div>
                    <div className="row">
        
                        <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Flat Key</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time Slot</th>
                               
                               
                              </tr>
                            </thead>
                            <tbody>
                              {visitData.map((item,index)=>(
                                 <tr>
                                 <th scope="row">{item.fVisit.usr_Key}</th>
                                 <td>{item.fVisit.usrName}</td>
                                 <td>{item.visit_Date}</td>
                                 <td>{item.timeSlot}</td>
                              
                               </tr>
                              ))}
                             
                            </tbody>
                          </table>
                    </div>
        
        
        
                </div>
        </div>
    </div>
        </div>
    );
}