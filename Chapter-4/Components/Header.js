import React, {useContext} from "react"
import FoodLogo from "../Images/FoodLogo.jpg"
import {Link} from "react-router-dom"
// import UserContext from "./userContext"
import {useSelector} from "react-redux";

const Logo=()=>{
    return <img alt ="Food Logo" className="Logo" src={FoodLogo}/>
     }

const Header=()=>{
    // const user=useContext(UserContext)
    const cartItems= useSelector((store)=>store.cart.items)
    const rain=["rain1","rain2"]
    console.log(rain)
        

    return(
        <div className="header">
            <Logo/>
            <div className="nav-items">
                <ul>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/instamart">Instamart</Link></li>
                    <li><Link to="/cart">Cart-{cartItems.length}</Link></li>
                    {/* <li>{user.name}</li> */}
                </ul>

            </div>
            
        </div>

    )
}

export default Header;
