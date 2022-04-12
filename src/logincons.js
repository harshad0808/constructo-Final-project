import { Link } from "react-router-dom";
import pic from "./image/construction-crane.gif"
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

export default function Logincons()
{
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");

    const passwordhandle = (e) => {
        setpassword(e.target.value);
      };
      const usernamehandle = (e) => {
        setusername(e.target.value);
      };


     const   submit = async () => {
        
        const data=await axios.post("http://localhost:8080/construction/logincons", {
            
            usrName:username,
            c_Password:password,



        });
        sessionStorage.setItem("C_id",data.data.c_id);
        
        console.log(typeof data);
        console.log(data.data.usrName);
        if(data.data.usrName==username && data.data.c_Password==password)
        {
            console.log("inside if");
           
            window.location.href="/consDashboard";
        }
        else
        {
            console.log("inside else");
            

        }
      };
    return (
        <div>
            <div class="container-fluid bg-secondary " style={{backgroundImage:`url(${pic})`,backgroundRepeat: "no-repeat",  height: "100%",
    backgroundSize:" 100% 100%"}}>
        <div class="row  justify-content-center align-content-center" style={{height: "100vh"}}>
            <div class="col-4  p-3" style={{backgroundColor: 'rgba(233, 192, 13, 0.2)'}}>
                <div class="text-center text-light">
                    <h2>Log In - (Construction)</h2>
                </div>
               
                <form class="text-light">
                    <label>Enter Your Username:</label><br></br>
                    <input class="form-control" type="text" value={username} onChange={usernamehandle} placeholder="Username"/><br></br>
                    <label>Enter Your Password:</label><br></br>
                    <input class="form-control" type="password" value={password} onChange={passwordhandle} placeholder="Username"/><br></br>

                    <div class="text-center">
                    <input class="btn btn-dark" type="button" onClick={submit} value="Log In"/>
                </div>
                <div><span>Forget Password: <Link to="/forgotpassword">Reset Now</Link></span></div>
                <div><span>Dont have Account: <Link to="/SignupCons">Register Now</Link></span></div>
                <div><span>Login as Flat Owner: <Link to="/">Login now</Link></span></div>
                    
                </form>
            </div>
        </div>
    </div>
        </div>
    );
}