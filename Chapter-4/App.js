import React from "react";
import ReactDOM from"react-dom/client";
export default AppLayout;

const Logo=()=>{
    return(
        <img alt ="Food Logo" className="Logo" src="/Images/FoodLogo.jpg"/>

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
const AppLayout=()=>{
    return(
        <Header/>
    )
    
 
}