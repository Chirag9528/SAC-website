<<<<<<< HEAD
import React from 'react'
import './Aboutus.css'
=======
import React from "react";
import "./Aboutus.css";
>>>>>>> cabdcb19a7227d7ca17a4675e9fae1ece84345fe

const Aboutus = () => {
  return (
    <div className="container abtus d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
      <h1 className="abtTit position-relative d-inline-block pb-4">About Us</h1>
      <div className="abtDat d-flex flex-column justify-content-center align-items-center row">
        <p className="abtPara col-8 my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          corporis, ipsa, nihil quibusdam aperiam consequuntur enim labore aut
          veniam excepturi natus magni maxime rerum ab. Laborum delectus soluta
          corrupti officiis!
        </p>
        <div class="abtimg"></div>
      </div>
    </div>
  );
};

export default Aboutus;
