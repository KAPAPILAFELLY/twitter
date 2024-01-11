import React from "react";
import TimelineProp from "./../../images/Timeline-Prop.svg"

function Header () {
    return(
      <div className='header'>
          <h2 className="page-title">Home</h2>
        <Toptweets />
     </div>  
    )
}

function Toptweets(){
    return(
        <div>
          <img src={TimelineProp} alt=" " className="top-tweets" />
        </div>
    )
}
export default Header;