import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div className='text-center primary'>
      <img className='my-3' src={spinner} alt='loading'/>
    </div>
    // <div class="d-flex justify-content-center" >
    //   <div class="spinner-border" role="status" >
    //     <span class="visually-hidden" alt="loading" style={{height:'100px'}}>
    //       Loading...
    //     </span>
    //   </div>
    // </div>
  );
};
export default Spinner;
