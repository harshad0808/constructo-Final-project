import { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "./adminNav";
export default function Admin()
{
    const [data1, setData1] = useState([]);

    useEffect(() => {
        if(sessionStorage.getItem("C_id")==null)
    {
      window.location.href="/logincons";
    }
        getData();
      });

      async function getData()
         {
            await axios.get(`http://localhost:8080/construction/notverified`).then(json => setData1(json.data));
  
          }
  

    
    return (
        <>
             <div className=" container-fluid">
            <div className="row">
                <AdminNav></AdminNav>
            </div>
            <div className="row bg-light border border-dark">
                <div className="row text-center">
                    <h2>Unverified Construction Owners</h2>
                </div>
                <div className="col">
    
                    <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Construction Name</th>
                            <th scope="col">Rera Number</th>
                            <th scope="col">Verified Status</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                            {data1.map((item,index)=>(

                                <tr key={index}>
                                <th scope="row">{item.usrName}</th>
                                <td>{item.rera_No}</td>
                                <td>{item.verify_Status}</td>
                                <td>{item.phone_No}</td>
                                <td><input className=" btn btn-dark" value="Verify"/></td>
                                </tr>

                            ))}
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td></td>
                            <td><input className=" btn btn-dark" value="Verify"/></td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
    
    
    
            </div>
        </div>
        </>
    );

}