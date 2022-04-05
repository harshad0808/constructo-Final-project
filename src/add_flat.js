import pic from "./image/back.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
export default function Add_Flat()
{

    
    const [name, setName] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [totalAmount, setTotalAmount] = useState("");
    const [paidAmount, setPaidAmount] = useState("");
    const [nextInstallment, setNextInstallment] = useState("");
    const [possesionDate, setPossesionDate] = useState("");

    const namehandle = (e) => {
        setName(e.target.value);
      };

      const phonehandle = (e) => {
        setPhoneno(e.target.value);
      };

      const totalAmounthandle = (e) => {
        setTotalAmount(e.target.value);
      };

      const paidAmounthandle = (e) => {
        setPaidAmount(e.target.value);
      };

      const nextInstallmenthandle = (e) => {
        setNextInstallment(e.target.value);
      };

      const possesionDatehandle = (e) => {
        setPossesionDate(e.target.value);
      };

      const submit = () => {
        
        axios.post("http://localhost:8080/flat/add", {
            usr_Name:name,
            otal_amount:totalAmount,
            paid_amount:paidAmount,
            next_installment:nextInstallment,
            possesion_Date:possesionDate,
            phone_No:phoneno,
            cOwner: {
                "c_id": sessionStorage.getItem("C_id")},
           
            



        });
      };
      

   
    
    return(
        <div>
            
             <div class="container-fluid" style={{backgroundImage:`url(${pic})`,backgroundRepeat: "no-repeat",  height: "100%",
    backgroundSize:" 100% 100%"}}>
    <div class="row">
    <NavBar></NavBar>
    </div>
        <div class="row  justify-content-center align-content-center" style={{height: "100vh"}}>
            <div class="col-4 p-3" style={{backgroundColor: 'rgba(233, 192, 13, 0.2)'}}>
                <div class="text-center">
                    <h2>Add New Flat Owner Details:</h2>
                </div>
               
                <form>
                    <label>Enter Flat Owner Name</label><br></br>
                    <input class="form-control" type="text" value={name} onChange={namehandle} placeholder="Name"/><br></br>
                    <label>Enter Flat Owner Phone Number</label><br></br>
                    <input class="form-control" type="text" value={phoneno} onChange={phonehandle} placeholder="Name"/><br></br>
                    <label>Enter Total Amount of Flat</label><br></br>
                    <input class="form-control" type="text" value={totalAmount} onChange={totalAmounthandle} placeholder="Total Amount"/><br></br>
                    
                  
                    <label>Enter Total Paid Amount</label><br></br>
                    <input class="form-control" type="text" value={paidAmount} onChange={paidAmounthandle} placeholder="Paid Amount"/><br></br>
                    <label>Enter Next Installment Amount:</label><br></br>
                    <input class="form-control" type="text" value={nextInstallment} onChange={nextInstallmenthandle} placeholder="next Installment"/><br></br>
                    <label>Select Possesion Date:</label><br></br>
                    <input class="form-control" type="date" value={possesionDate} onChange={possesionDatehandle} /><br></br>
                    
                    

                    <div class="text-center">
                    <input class="btn btn-dark" type="button" value="Add" onClick={submit}/>
                </div>
                
                    
                </form>
            </div>
        </div>
    </div>
        </div>
    );
}