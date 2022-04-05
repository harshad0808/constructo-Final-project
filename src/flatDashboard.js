import NavFlat from "./navFlat";

export default function FlatDashboard()
{
    return(
        <div>

<div className="container-fluid">
            <div className="row">
               <NavFlat></NavFlat>
            </div>
            <div className="row mt-3 ms-3">

                <div className="col">
        
                    <div className="card text-black bg-light mb-3" style={{maxWidth: "18rem"}}>
                   
                        <div className="card-body text-center">
                          <h5 className="card-title">Possesion Date</h5>
                          <p className="card-text">22/03/2023</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-black bg-light mb-3" style={{maxWidth: "18rem"}}>
                   
                        <div className="card-body text-center">
                          <h5 className="card-title">Total Amount</h5>
                          <p className="card-text">Rs 6500000</p>
                        </div>
                    </div>
        
                </div>
                <div className="col">
        
                    <div className="card text-black bg-light mb-3" style={{maxWidth: "18rem"}}>
                   
                        <div className="card-body text-center">
                          <h5 className="card-title">Paid Amount</h5>
                          <p className="card-text">Rs 350000</p>
                        </div>
                    </div>
                </div>
                <div className="col">
        
                    <div className="card text-black bg-light mb-3" style={{maxWidth: "18rem"}}>
                   
                        <div className="card-body text-center">
                          <h5 className="card-title">Next Installment</h5>
                          <p className="card-text">Rs 65000</p>
                        </div>
                    </div>
                </div>
        
               
                
            </div>
            <div className="row">
                <div className="col-2">

                </div>
                <div className=" col-8">

                </div>
                <div className="col-2">
                    
                </div>
            </div>

        </div>
        </div>
    );
}