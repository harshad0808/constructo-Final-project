import { Link } from "react-router-dom";
import pic from "./image/back.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export function SignUpFlat()
{
    const [key, setkey] = useState("");
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [conpassword, setconpassword] = useState("");


    const keydhandle = (e) => {
        setkey(e.target.value);
      };
      const namehandle = (e) => {
        setname(e.target.value);
      };
      
      const passwordhandle = (e) => {
        setpassword(e.target.value);
      };

      
      const conpasswordhandle = (e) => {
        setconpassword(e.target.value);
      };

      const submit = () => {
        
        axios.post("http://localhost:8080/flat/validateAccount", {
            usr_Key: key,
            usr_Password: "1234",

        });
      };


    return(
        <div>
             <div class="container-fluid" style={{backgroundImage:`url(${pic})`,backgroundRepeat: "no-repeat",  height: "100%",
    backgroundSize:" 100% 100%"}}>
        <div class="row  justify-content-center align-content-center" style={{height: "100vh"}}>
            <div class="col-4 p-3" style={{backgroundColor: 'rgba(233, 192, 13, 0.2)'}}>
                <div class="text-center">
                    <h2>Validate Your Account Now:</h2>
                </div>
               
                <form>
                    <label>Enter Your Flat key</label><br></br>
                    <input class="form-control" value={key} onChange={keydhandle} type="text" placeholder="Flat key"/><br></br>
                    <label>Enter Your Name</label><br></br>
                    <input class="form-control" value={name} onChange={namehandle}  type="text" placeholder="Name"/><br></br>
                   
                    
                  
                    <label>Enter Your Password</label><br></br>
                    <input class="form-control" type="password" value={password} onChange={passwordhandle} placeholder="Password"/><br></br>
                    <label>Confirm Password:</label><br></br>
                    <input class="form-control" type="password" value={conpassword} onChange={conpasswordhandle} placeholder="Confirm Password"/><br></br>
                    
                    

                    <div class="text-center">
                    <input class="btn btn-dark" type="button" onClick={submit} value="Register"/>
                </div>
                <span>Already have Account: <Link to="/">Log in</Link></span>
                    
                </form>
            </div>
        </div>
    </div>
        </div>
    );
}