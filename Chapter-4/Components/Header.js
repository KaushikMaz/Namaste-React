import React from "react"
import FoodLogo from "../Images/FoodLogo.jpg"
const Logo=()=>{
    return(
        <img alt ="Food Logo" className="Logo" src={FoodLogo}/>

    )
}
const Header=()=>{
    return(
        <div className="header">
            <Logo/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
            
        </div>

    )
}

export default Header;
