import { useEffect, useState } from "react";
import axios from "axios";
import NavFlat from "./navFlat";
export default function FlatDashboard() {
  const [posdate, setposdate] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [paid_amount, setPaidAmount] = useState("");
  const [next_installment, setNextInstallment] = useState("");
  const [name, setName] = useState("");

  const [image, setImage] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("usr_id") == null) {
      window.location.href = "/";
    }
    getDetails();
  }, []);
  async function getDetails() {
    const data = await axios.get(
      `http://localhost:8080/flat/${sessionStorage.getItem("usr_id")}`,
      {}
    );
    console.log(data);
    setTotalAmount(data.data.total_amount);
    setPaidAmount(data.data.paid_amount);
    setNextInstallment(data.data.next_installment);
    setposdate(data.data.possesion_Date);
    setName(data.data.usr_Name);

    const data1 = await axios.get(
      `http://localhost:8080/construction/images/${sessionStorage.getItem("construct_id")}`,
      {}
    );
    //setImage(data1.data.result.img);
    const images = data1.data.result;
    console.log(images);
    setImage(data1.data);
    console.log("data1.data");
    console.log(data1.data);
    console.log("Images");
    console.log(image);
  }

  return (
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
            <div
              className="card text-black bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-center">
                <h5 className="card-title">Possesion Date</h5>
                <p className="card-text">{posdate}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-black bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-center">
                <h5 className="card-title">Total Amount</h5>
                <p className="card-text">Rs {totalAmount}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-black bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-center">
                <h5 className="card-title">Paid Amount</h5>
                <p className="card-text">Rs {paid_amount}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-black bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-center">
                <h5 className="card-title">Next Installment</h5>
                <p className="card-text">Rs {next_installment}</p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="row">
        {image.map((images) => (
             <div className="card mb-3">
             <img className="card-img-top" style={{width:"100%" ,height:"400px"}} src={"/images/" + images.img} alt="Card image cap"></img>
             <div className="card-body">
               <h5 className="card-title">Recent Update ({images.updateDate})</h5>
               <p className="card-text">{images.details}</p>
               <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
             </div>
           </div>
          ))}
       
       </div>
       </div>
        </div>
      </div>

    </div>
  );
}