import pic from "./image/back.jpg"
export default function Add_Flat()
{
    return(
        <div>
             <div class="container-fluid" style={{backgroundImage:`url(${pic})`,backgroundRepeat: "no-repeat",  height: "100%",
    backgroundSize:" 100% 100%"}}>
    <div class="row">

    </div>
        <div class="row  justify-content-center align-content-center" style={{height: "100vh"}}>
            <div class="col-4 p-3" style={{backgroundColor: 'rgba(233, 192, 13, 0.2)'}}>
                <div class="text-center">
                    <h2>Add New Flat Owner Details:</h2>
                </div>
               
                <form>
                    <label>Enter Flat Owner Name</label><br></br>
                    <input class="form-control" type="text" placeholder="Name"/><br></br>
                    <label>Enter Flat Owner Phone Number</label><br></br>
                    <input class="form-control" type="text" placeholder="Name"/><br></br>
                    <label>Enter Total Amount of Flat</label><br></br>
                    <input class="form-control" type="text" placeholder="Total Amount"/><br></br>
                    
                  
                    <label>Enter Total Paid Amount</label><br></br>
                    <input class="form-control" type="text" placeholder="Paid Amount"/><br></br>
                    <label>Enter Next Installment Amount:</label><br></br>
                    <input class="form-control" type="text" placeholder="next Installment"/><br></br>
                    <label>Select Possesion Date:</label><br></br>
                    <input class="form-control" type="date" /><br></br>
                    
                    

                    <div class="text-center">
                    <input class="btn btn-dark" type="button" value="Add"/>
                </div>
                
                    
                </form>
            </div>
        </div>
    </div>
        </div>
    );
}