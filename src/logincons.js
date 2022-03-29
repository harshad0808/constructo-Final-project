import { Link } from "react-router-dom";
import pic from "./image/back.jpg"

export default function Logincons()
{
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
                    <input class="form-control" type="text" placeholder="Username"/><br></br>
                    <label>Enter Your Password:</label><br></br>
                    <input class="form-control" type="password" placeholder="Username"/><br></br>

                    <div class="text-center">
                    <input class="btn btn-dark" type="button" value="Log In"/>
                </div>
                <div><span>Dont have Account: <Link to="/SignupCons">Register Now</Link></span></div>
                <div><span>Login as Flat Owner: <Link to="/">Login now</Link></span></div>
                    
                </form>
            </div>
        </div>
    </div>
        </div>
    );
}