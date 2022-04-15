import pic from "./image/construction-crane.gif"
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";




export default function LoginFlat()
{


    

    const [password, setpassword] = useState("");
    const [key, setkey] = useState("");

    const passwordhandle = (e) => {
        setpassword(e.target.value);
      };
      const keyhandle = (e) => {
        setkey(e.target.value);
      };


      function isValid()
      {
          var temp=true;
          var domkey=document.getElementById("keyvalue").value;
          var dompassword=document.getElementById("password").value;

          if (domkey== "") {
            document.getElementById("key1").innerHTML =
              " ** Please fill the Key field ";
              temp=false;
              
          }
          else
          {
            document.getElementById("key1").innerHTML =
            "";
          }
          if (dompassword == "") {
            document.getElementById("password1").innerHTML =
              " ** Please fill the Password field ";
              temp=false;
              
          }
          else{
            document.getElementById("password1").innerHTML =
            "";
          }

          if(temp==false)
          {
            console.log(temp);
            return;
          }
          else{
            submit();
    
            document.getElementById("password").value="";
           
            document.getElementById("keyvalue").value="";
           
  
          }
      }
     const   submit = async () => {
        
        const data=await axios.post("http://localhost:8080/flat/loginflat", {
            
            usr_Key:key,
            usr_Password:password,



        });
            

        
        console.log(typeof data);
        console.log(data);
        if(data.data.usr_Key==key && data.data.usr_Password==password)
        {
            console.log("inside if");
           
            window.location.href="/flatDashboard";
        }
        else
        {
            document.getElementById("credcheck").innerHTML =
              " ** Wrong Flat Key or Password ";
            console.log("inside else credcheck");
            

        }
        sessionStorage.setItem("usr_id",data.data.uId);
        sessionStorage.setItem("construct_id",data.data.cOwner.c_id);
   
      };

return (



    <div style={{backgroundImage:`url(${pic})`,backgroundRepeat: "no-repeat",  height: "100%",
    backgroundSize:" 100% 100%"}}>
    <div className="container-fluid" >
        <div className="row  justify-content-center align-content-center" style={{height: "100vh"}}>
            <div className="col-4  p-3" style={{backgroundColor: 'rgba(233, 192, 13, 0.2)'}}>
                <div className="text-center text-dark">
                    <h2>Log In - Flat Owner</h2>
                </div>
                
               
                <form className="text-dark fw-bold">
                    <label>Enter Your Key:</label><br></br>
                    <input id="keyvalue" className="form-control" type="text" value={key} onChange={keyhandle} placeholder="Key"/><br></br>
                  <div>  <span id="key1" class="text-danger"></span></div>
                    <label>Enter Your Password:</label><br></br>
                    <input id="password" className="form-control" type="password" value={password} onChange={passwordhandle} placeholder="Password"/><br></br>
                   <div> <span id="password1" class="text-danger "></span></div>
                    <div className="text-center">
                    <input className="btn btn-dark" type="button" onClick={isValid} value="Log In"/>
                </div>
                <div> <span id="credcheck" class="text-danger "></span></div>

                <div><span>Didn't Validated Account: <Link to="/signupFlat">Validate Now</Link></span></div>
                                <div><span>Login as Construction Owner: <Link to="/logincons">Login now</Link></span></div>
                    
                </form>

               
                
            </div>
        </div>
    </div>
    </div>
);
}