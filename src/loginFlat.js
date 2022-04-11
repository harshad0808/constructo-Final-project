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


      
     const   submit = async () => {
        
        const data=await axios.post("http://localhost:8080/flat/loginflat", {
            
            usr_Key:key,
            usr_Password:password,



        });
        sessionStorage.setItem("usr_id",data.data.uId);
        
        console.log(typeof data);
        console.log(data);
        if(data.data.usr_Key==key && data.data.usr_Password==password)
        {
            console.log("inside if");
           
            window.location.href="/flatDashboard";
        }
        else
        {
            console.log("inside else");
            

        }
      };

return (



    <div style={{backgroundImage:`url(${pic})`,backgroundRepeat: "no-repeat",  height: "100%",
    backgroundSize:" 100% 100%"}}>
    <div className="container-fluid" >
        <div className="row  justify-content-center align-content-center" style={{height: "100vh"}}>
            <div className="col-4  p-3" style={{backgroundColor: 'rgba(233, 192, 13, 0.2)'}}>
                <div className="text-center text-light">
                    <h2>Log In - Flat Owner</h2>
                </div>
                
               
                <form className="text-light">
                    <label>Enter Your Key:</label><br></br>
                    <input className="form-control" type="text" value={key} onChange={keyhandle} placeholder="Key"/><br></br>
                    <label>Enter Your Password:</label><br></br>
                    <input className="form-control" type="password" value={password} onChange={passwordhandle} placeholder="Password"/><br></br>

                    <div className="text-center">
                    <input className="btn btn-dark" type="button" onClick={submit} value="Log In"/>
                </div>
                <div><span>Didn't Validated Account: <Link to="/signupFlat">Validate Now</Link></span></div>
                <div><span>Login as Construction Owner: <Link to="/logincons">Login now</Link></span></div>
                    
                </form>

               
                
            </div>
        </div>
    </div>
    </div>
);
}