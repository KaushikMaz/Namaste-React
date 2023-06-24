import React from "react"
import FoodLogo from "../Images/FoodLogo.jpg"
import {Link} from "react-router-dom"

const Logo=()=>{
    return <img alt ="Food Logo" className="Logo" src={FoodLogo}/>

    
}
const Header=()=>{
    return(
        <div className="header">
            <Logo/>
            <div className="nav-items">
                <ul>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                </ul>

            </div>
            
        </div>

    )
}

export default Header;
