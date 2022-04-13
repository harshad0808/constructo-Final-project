import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";


export default function AddUpdates() {
  const [progressDetails, setDetails] = useState("");
  const [updationDate, setUpdationDate] = useState("");

  let [image, setImage] = useState(null);

  async function AddData() {
    let form = new FormData();
    form.append("id",sessionStorage.getItem("C_id"));

    console.log(image);

    form.append("img", image);

    form.append("details", progressDetails);

    form.append("UpdateDate", updationDate);

    await axios.post(" http://localhost:8080/construction/update", form, {
      headers: {
        "Content-Type": "multipart/form-data",
       
      },
    });
  }

  return (
    <div>
      <NavBar></NavBar>

      <form style={{ width: "800px", margin: "auto", marginTop: "40px" }}>
        <div className="form-group">
          <label style={{ margin: "10px" }}>Property Details</label>
          <textarea
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Details"
          />
        </div>

        <div className="form-group">
          <label style={{ margin: "10px" }}>Please Select Date</label>
          <input
            onChange={(e) => {
              setUpdationDate(e.target.value);
            }}
            className="form-control"
            type="date"
          />
        </div>
        <div className="form-group">
          <label style={{ margin: "10px" }}>Add image</label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            className="form-control-file"
          />
        </div>
       
       

        <button
          onClick={() => {
            AddData();
          }}
          style={{ margin: "10px" }}
          type="button"
          className="btn btn-primary"
        >
          Add
        </button>
      </form>
    </div>
  );
}