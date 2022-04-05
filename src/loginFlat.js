import pic from "./image/construction-crane.gif"
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";




export default function LoginFlat()
{
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
                    <input className="form-control" type="text" placeholder="Key"/><br></br>
                    <label>Enter Your Password:</label><br></br>
                    <input className="form-control" type="password" placeholder="Password"/><br></br>

                    <div className="text-center">
                    <input className="btn btn-dark" type="button" value="Log In"/>
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