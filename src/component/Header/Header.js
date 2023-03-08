import React from "react";
import img from '../../images/logo2.jpg';
import '../Header/Header.css'
const Header = () =>{

    return(
        <div className="header">
            <img src={img} alt="" />
            <h1>Elite-<small style={{color:"rgb(235, 197, 60)"}}>Active</small>-Club</h1>
        </div>
    )
}

export default Header;