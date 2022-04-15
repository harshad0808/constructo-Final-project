import pic from "./image/back.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Swal from "sweetalert2";
export default function Add_Flat()
{
  useEffect(() => {
    if(sessionStorage.getItem("C_id")==null)
    {
      window.location.href="/logincons";
    }

    var date1=new Date();
    var cdate=date1.getDate();
    var month=date1.getMonth()+1;
    var year=date1.getFullYear();
    if(cdate<10)
    {
        cdate="0"+cdate;
    }
    if(month<10)
    {
        month="0"+month;
    }
    var mindate=year + "-" + month + "-" + cdate;
    document.getElementById("dt").setAttribute('min',mindate);
    console.log(mindate)
  });


  

    
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


      function isValid()
      {

        var domname=document.getElementById("name").value;
  var domphone=document.getElementById("phone").value;
  var domtotal=document.getElementById("total").value;
  var dompaid=document.getElementById("paid").value;
  var dominstallment=document.getElementById("installment").value;
        const regexExp = /^[6-9]\d{9}$/gi;
        var temp=true;

        if (domname == "") {
          document.getElementById("name1").innerHTML =
            " ** Please fill the Name field ";
          temp=false;
          console.log("1");
        }
        else     
        if (domname.length <= 2 || domname.length > 20) {
          document.getElementById("name1").innerHTML =
            " ** Name length must be between 2 and 20 ";
            temp=false;
            console.log("2");
        }
        else
        if (!isNaN(domname)) {
          document.getElementById("name1").innerHTML =
            " ** only characters are allowed";
            temp=false;
            console.log("3");
        }
        else{
          document.getElementById("name1").innerHTML =
            "";
           // temp=true;
        }

        if (domphone == "") {
          document.getElementById("phone1").innerHTML =
            " ** Please fill the Mobile Number field ";
            temp=false;
            console.log("9");
        }
        else

        if (isNaN(domphone)) {
          document.getElementById("phone1").innerHTML =
            " ** User must write digits only not characters ";
            temp=false;
            console.log("10");
        }
        else
        if (domphone.length!=10) {
          document.getElementById("phone1").innerHTML =
            " ** Mobile number must be 10 digits only ";
            temp=false;
            console.log("11");
        }
        else if(regexExp.test(domphone)==false)
        {
          document.getElementById("phone1").innerHTML =
            " ** Mobile number must start with 6 to 9 digits ";
            temp=false;
            console.log("12");
        }
        else{
          document.getElementById("phone1").innerHTML =
            "";
           // temp=true;
        }



        if (domtotal == "") {
          document.getElementById("total1").innerHTML =
            " ** Please fill the Total amount field ";
            temp=false;
            console.log("9");
        }
        else

        if (isNaN(domtotal)) {
          document.getElementById("total1").innerHTML =
            " ** User must write digits only not characters ";
            temp=false;
            console.log("10");
        }
        else{
          document.getElementById("total1").innerHTML =
            "";
           // temp=true;
        }


        if (dompaid == "") {
          document.getElementById("paid1").innerHTML =
            " ** Please fill the paid amount field ";
            temp=false;
            console.log("9");
        }
        else

        if (isNaN(dompaid)) {
          document.getElementById("paid1").innerHTML =
            " ** User must write digits only not characters ";
            temp=false;
            console.log("10");
        }
        else{
          document.getElementById("paid1").innerHTML =
            "";
           // temp=true;
        }


        if (dominstallment == "") {
          document.getElementById("installment1").innerHTML =
            " ** Please fill the installment amount field ";
            temp=false;
            console.log("9");
        }
        else

        if (isNaN(dominstallment)) {
          document.getElementById("installment1").innerHTML =
            " ** User must write digits only not characters ";
            temp=false;
            console.log("10");
        }
        else{
          document.getElementById("installment1").innerHTML =
            "";
           // temp=true;
        }



        if(temp==false)
        {
          console.log(temp);
          return;
        }
        else{
          submit();
          document.getElementById("name").value="";
          document.getElementById("phone").value="";
          document.getElementById("total").value="";
          document.getElementById("paid").value="";
          document.getElementById("installment").value="";
        

        }
       

      }

      const submit = () => {
        
        axios.post("http://localhost:8080/flat/add", {
            usr_Name:name,
            total_amount:totalAmount,
            paid_amount:paidAmount,
            next_installment:nextInstallment,
            possesion_Date:possesionDate,
            phone_No:phoneno,
            cOwner: {
                "c_id": sessionStorage.getItem("C_id")},
           
            



        }).then(
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Flat Owner Added Successfully",})
        );
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
               
                <form className="fw-bold">
                    <label>Enter Flat Owner Name</label><br></br>
                    <input class="form-control" id="name" type="text" value={name} onChange={namehandle} placeholder="Name"/>
                    <div><span id="name1" className="text-danger font-weight-bold"></span></div>
                    <label>Enter Flat Owner Phone Number</label><br></br>
                    <input class="form-control" id="phone" type="text" value={phoneno} onChange={phonehandle} placeholder="Phone Number"/>
                    <div><span id="phone1" className="text-danger font-weight-bold"></span></div>
                    <label>Enter Total Amount of Flat</label><br></br>
                    <input class="form-control" id="total" type="text" value={totalAmount} onChange={totalAmounthandle} placeholder="Total Amount"/>
                    <div><span id="total1" className="text-danger font-weight-bold"></span></div>
                  
                    <label>Enter Total Paid Amount</label><br></br>
                    <input class="form-control" id="paid" type="text" value={paidAmount} onChange={paidAmounthandle} placeholder="Paid Amount"/>
                    <div><span id="paid1" className="text-danger font-weight-bold"></span></div>
                    <label>Enter Next Installment Amount:</label><br></br>
                    <input class="form-control" id="installment" type="text" value={nextInstallment} onChange={nextInstallmenthandle} placeholder="next Installment"/>
                    <div><span id="installment1" className="text-danger font-weight-bold"></span></div>
                    <label>Select Possesion Date:</label><br></br>
                    <input class="form-control" id="dt" type="date" value={possesionDate} onChange={possesionDatehandle} />
                    
                    

                    <div class="text-center">
                    <input class="btn btn-dark" type="button" value="Add" onClick={isValid}/>
                </div>
                
                    
                </form>
            </div>
        </div>
    </div>
        </div>
    );
}