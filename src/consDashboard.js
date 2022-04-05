
import NavBar from "./NavBar";
export default function ConstructionDashboard()
{
    return (
        <div>
            
            <div className="container-fluid">
        <div className="row">
        <NavBar></NavBar>

        </div>
        <div className="row" style={{height: "75vh"}}>
           
               

                <div className="col-6 bg-light border border-dark">
                    <div className="row text-center">
                        <h2>Your Flat Owners Details</h2>
                    </div>
                    <div className="row">
        
                        <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Flat Key</th>
                                <th scope="col">Name</th>
                                <th scope="col">Flat Price</th>
                                <th scope="col">Paid amount</th>
                                <th scope="col">Remaining Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
        
        
        
                </div>
           
           

                <div className="col-6 bg-light border border-dark">
                    <div className="row text-center">
                        <h2>Latest Visit Requests</h2>
                    </div>
                    <div className="row">
        
                        <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Flat Key</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                               
                               
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                             
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                        
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                  
                              </tr>
                            </tbody>
                          </table>
                    </div>
        
        
        
                </div>
        </div>
    </div>
        </div>
    );
}