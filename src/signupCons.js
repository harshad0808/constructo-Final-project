import pic from "./image/back.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function SignupCons()
{
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [no_flats, setno_flats] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [rera_no, setrera_no] = useState("");
    const [email, setemail] = useState("");
    const [conpass, setconpass] = useState("");


    const namehandle = (e) => {
        setname(e.target.value);
      };

      const addresshandle = (e) => {
        setaddress(e.target.value);
      };

      const no_flatshandle = (e) => {
        setno_flats(e.target.value);
      };

      const passwordhandle = (e) => {
        setpassword(e.target.value);
      };
      const usernamehandle = (e) => {
        setusername(e.target.value);
      };

      const phonenohandle = (e) => {
        setphoneno(e.target.value);
      };

      const reranohandle = (e) => {
        setrera_no(e.target.value);
      };

      const emailhandle = (e) => {
        setemail(e.target.value);
      };

      const conpasshandle = (e) => {
        setconpass(e.target.value);
      };

      function isValid()
      {
        let temp=true;

        var domname=document.getElementById("name").value;
        var domaddress=document.getElementById("address").value;
        var domflatno=document.getElementById("flatno").value;
        var dompassword=document.getElementById("password").value;
        var domphoneno=document.getElementById("phoneno").value;
        var domusername=document.getElementById("username").value;
        var domrerano=document.getElementById("rerano").value;
        var domemail=document.getElementById("email").value;
        var domconpass=document.getElementById("conpass").value;

        const regexExp = /^[6-9]\d{9}$/gi;

        if (domname == "") {
          document.getElementById("name1").innerHTML =
            " ** Please fill the Name field ";
          temp=false;
        }
        else     
        if (domname.length <= 2 || domname.length > 20) {
          document.getElementById("name1").innerHTML =
            " ** Name length must be between 2 and 20 ";
            temp=false;
        }
        else
        if (!isNaN(domname)) {
          document.getElementById("name1").innerHTML =
            " ** only characters are allowed";
            temp=false;
        }
        else{
          document.getElementById("name1").innerHTML =
            "";
           // temp=true;
        }


        if (domaddress == "") {
          document.getElementById("address1").innerHTML =
            " ** Please fill the address field ";
          temp=false;
        }
        else     
        if (domaddress.length <=10) {
          document.getElementById("address1").innerHTML =
            " ** Address length must be greater than  10 ";
            temp=false;
        }
       
        else{
          document.getElementById("address1").innerHTML =
            "";
           // temp=true;
        }


        if (domemail == "") {
          document.getElementById("email1").innerHTML =
            " ** Please fill the Email ID field ";
            temp=false;
        }
        else
        
        if (domemail.indexOf('@') <= 0) {
          document.getElementById("email1").innerHTML =
            " ** Invalid @ position ";
            temp=false;
        }
        else
        if ((domemail.charAt(domemail.length-4)!='.') && (domemail.charAt(domemail.length-3)!='.')) {
          document.getElementById("email1").innerHTML =
            " ** Invalid . position ";
            temp=false;
        }
        else{
          document.getElementById("email1").innerHTML =
            " ";
            //temp=true;
        }

        
        if (domphoneno == "") {
          document.getElementById("phoneno1").innerHTML =
            " ** Please fill the Mobile Number field ";
            temp=false;
        }
        else

        if (isNaN(domphoneno)) {
          document.getElementById("phoneno1").innerHTML =
            " ** User must write digits only not characters ";
            temp=false;
        }
        else
        if (domphoneno.length!=10) {
          document.getElementById("phoneno1").innerHTML =
            " ** Mobile number must be 10 digits only ";
            temp=false;
        }
        else if(regexExp.test(domphoneno)==false)
        {
          document.getElementById("phoneno1").innerHTML =
            " ** Mobile number must start with 6 to 9 digits ";
            temp=false;
        }
        else{
          document.getElementById("phoneno1").innerHTML =
            "";
           // temp=true;
        }



        if (domrerano == "") {
          document.getElementById("rerano1").innerHTML =
            " ** Please fill the rera number field ";
            temp=false;
        }
        else

        if (isNaN(domrerano)) {
          document.getElementById("rerano1").innerHTML =
            " ** User must write digits only not characters ";
            temp=false;
        }
        else
        if (domrerano.length!=10) {
          document.getElementById("rerano1").innerHTML =
            " ** Rera number must be 10 digits only ";
            temp=false;
        }
        
        else{
          document.getElementById("rerano1").innerHTML =
            "";
           // temp=true;
        }



        if (domusername == "") {
          document.getElementById("username1").innerHTML =
            " ** Please fill the Username field ";
            temp=false;
        }
        else
        
        if (domusername.length <= 2 || domusername.length > 10) {
          document.getElementById("username1").innerHTML =
            " ** Username length must be between 2 and 10 ";
            temp=false;
        }
        else{
          document.getElementById("username1").innerHTML =
            " ";
           // temp=true;
        }

        if (dompassword == "") {
          document.getElementById("password1").innerHTML =
            " ** Please fill the Password field ";
            temp=false;
        }
        else

        if (dompassword.length <= 8 || dompassword.length > 20) {
          document.getElementById("password1").innerHTML =
            " ** Password length must be between 8 and 20 ";
            temp=false;
        }
        else{
          document.getElementById("password1").innerHTML =
            " ";
           // temp=true;
        }


        if (domflatno == "") {
          document.getElementById("flatno1").innerHTML =
            " ** Please fill the number of flat field ";
            temp=false;
        }
        else

        if (isNaN(domflatno)) {
          document.getElementById("flatno1").innerHTML =
            " ** User must write digits only not characters ";
            temp=false;
        }
        else
        if (domflatno.length>1000) {
          document.getElementById("flatno1").innerHTML =
            " ** Number of flats must be less than 1000 ";
            temp=false;
        }
        
        
        else{
          document.getElementById("flatno1").innerHTML =
            "";
            //temp=true;
        }

        if(dompassword!=domconpass)
        {
          document.getElementById("password1").innerHTML =
            " ** Password and Confirm Password should match ";

            document.getElementById("conpass1").innerHTML =
            " ** Password and Confirm Password should match ";  
            temp=false;
        }
        else{
          document.getElementById("password1").innerHTML =
          "";
         

          document.getElementById("conpass1").innerHTML =
          "";  
          
        }

        if(temp==false)
        {
          console.log(temp);
          return;
        }
        else{
          submit();
          document.getElementById("name").value="";
          document.getElementById("address").value="";
          document.getElementById("flatno").value="";
          document.getElementById("password").value="";
          document.getElementById("phoneno").value="";
          document.getElementById("username").value="";
          document.getElementById("rerano").value="";
          document.getElementById("email").value="";
          document.getElementById("conpass").value="";

        }
        

      }

      const submit = () => {
        
        axios.post("http://localhost:8080/construction/add", {
            c_Name:name,
            usrName:username,
            address:address,
            rera_No:rera_no,
            no_Flats:no_flats,
            verify_Status:"not verified",
            email:email,
            phone_No:phoneno,
            c_Password:password,



        });
      };
    return(
        <div  style={{backgroundImage:`url(${pic})`,backgroundRepeat: "no-repeat",  height: "100%",
        backgroundSize:" 100% 100%"}}>
         <div className="container-fluid ">
        <div className="row  justify-content-center align-content-center" style={{height: "100vh"}}>
            <div className="col-8 p-3"   style={{backgroundColor: 'rgba(233, 192, 13, 0.2)'}}>
                <div className="row">
                    <div className="col">
                        <h2>Register Now: Construction</h2>
                    </div>
                </div>
                
               <div className="row">
                    <div className="col-6">
                        <label>Enter Your Construction Name</label><br></br>
                        <input id="name" className="form-control" value={name} onChange={namehandle} type="text" placeholder="Name"/>
                        <span id="name1" class="text-danger"></span>
                        <br></br>
                        

                        <label>Enter Your site Address:</label><br></br>
                        <input id="address" className="form-control"  value={address} onChange={addresshandle} type="tel" placeholder="Username"/>
                        <span id="address1" class="text-danger"></span>
                        <br></br>
                         

                        <label>Enter Number of Flats</label><br></br>
                        <input id="flatno" className="form-control"  value={no_flats} onChange={no_flatshandle} type="text" placeholder="Password"/>
                        <span id="flatno1" class="text-danger"></span>
                        <br></br>
                       

                        <label>Password</label><br></br>
                        <input id="password" className="form-control"  value={password} onChange={passwordhandle} type="password" placeholder="password"/>
                        <span id="password1" class="text-danger"></span>
                        <br></br>
                        

                        <label>Enter Your Construction Phone Number</label><br></br>
                        <input id="phoneno" className="form-control"  value={phoneno} onChange={phonenohandle} type="text" placeholder="Phone Number"/>
                        <span id="phoneno1" class="text-danger"></span>
                        <br></br>
                        
                    </div>
                    <div className="col-6">
                        <label>Enter Your Username</label><br></br>
                        <input id="username" className="form-control"  value={username} onChange={usernamehandle} type="email" placeholder="Email"/>
                        <span id="username1" class="text-danger"></span>
                        <br></br>
                        

                        <label>Enter Your Rera Number</label><br></br>
                        <input id="rerano" className="form-control"  value={rera_no} onChange={reranohandle} type="text" placeholder="Username"/>
                        <span id="rerano1" class="text-danger"></span>
                        <br></br>
                        

                        <label>Enter Your Email</label><br></br>
                        <input id="email" className="form-control"  value={email} onChange={emailhandle} type="text" placeholder="Email"/>
                        <span id="email1" class="text-danger"></span>
                        <br></br>
                  

                        <label>Confirm Password</label><br></br>
                        <input id="conpass" className="form-control"  value={conpass} onChange={conpasshandle} type="password" placeholder="Confirm Password"/>
                        <span id="conpass1" class="text-danger"></span>
                        <br></br>
                       
                    </div>
               </div>
                <form>
                   
                   
                  
                    
                   
                   
                   
                   
                    
                    

                    <div className="text-center">
                    <input className="btn btn-dark" value={"Submit"}
                  onClick={isValid} type="button" />
                </div>
                <span>Already have Account: <Link to="/logincons">Log in</Link></span>
                    
                </form>
            </div>
        </div>
    </div>
        </div>
    );

}