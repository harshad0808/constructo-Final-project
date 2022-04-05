import { Link } from "react-router-dom";
export default function NavFlat()
{
    return(

        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Constructo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="#" to="/consDashboard">Home</Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="#" to="/addflat">Book Visit</Link>
        </li>
       
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="#" to="/addflat">Log Out</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}