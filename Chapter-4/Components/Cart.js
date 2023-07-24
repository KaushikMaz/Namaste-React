import React from "react"
import { IMG_CDN_URL } from "./Constants"
import {useSelector} from "react-redux"

// const FoodItems=({name,cloudinaryImageId,price})=>{
//     return(
//         <div>
//             <img src={IMG_CDN_URL+ cloudinaryImageId}/>
//             <h2>{name}</h2>
//             <h3>Rs-{price/100}</h3>
//         </div>
//     )
    
// }
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
    return(
        <div style={{display:"flex"}}>
            <h1>Cart-{cartItems.length}</h1>
            {/* <FoodItems {...cartItems[0]}/> */}
        </div>
    )
}

export default Cart;