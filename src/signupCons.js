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
                        <input className="form-control" value={name} onChange={namehandle} type="text" placeholder="Name"/><br></br>
                        
                        <label>Enter Your site Address:</label><br></br>
                        <input className="form-control"  value={address} onChange={addresshandle} type="tel" placeholder="Username"/><br></br>
                        
                        <label>Enter Number of Flats</label><br></br>
                        <input className="form-control"  value={no_flats} onChange={no_flatshandle} type="password" placeholder="Password"/><br></br>

                        <label>Password</label><br></br>
                        <input className="form-control"  value={password} onChange={passwordhandle} type="password" placeholder="password"/><br></br>

                        <label>Enter Your Construction Phone Number</label><br></br>
                        <input className="form-control"  value={phoneno} onChange={phonenohandle} type="text" placeholder="Phone Number"/><br></br>
                    </div>
                    <div className="col-6">
                        <label>Enter Your Username</label><br></br>
                        <input className="form-control"  value={username} onChange={usernamehandle} type="email" placeholder="Email"/><br></br>

                        <label>Enter Your Rera Number</label><br></br>
                        <input className="form-control"  value={rera_no} onChange={reranohandle} type="text" placeholder="Username"/><br></br>

                        <label>Enter Your Email</label><br></br>
                        <input className="form-control"  value={email} onChange={emailhandle} type="text" placeholder="Email"/><br></br>

                        <label>Confirm Password</label><br></br>
                        <input className="form-control"  value={conpass} onChange={conpasshandle} type="password" placeholder="Confirm Password"/><br></br>
                    </div>
               </div>
                <form>
                   
                   
                  
                    
                   
                   
                   
                   
                    
                    

                    <div className="text-center">
                    <input className="btn btn-dark" value={"Submit"}
                  onClick={submit} type="button" />
                </div>
                <span>Already have Account: <Link to="/logincons">Log in</Link></span>
                    
                </form>
            </div>
        </div>
    </div>
        </div>
    );

}