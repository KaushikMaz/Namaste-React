import React from "react"
import ResList from "./ResList"

const RestaurantCard=(props)=>{
    return(
        
        <div className="card">
            <img src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props?.restaurant?.data?.cloudinaryImageId}/>
            <h1>{props?.restaurant?.data?.name}</h1>
            <h2>{props?.restaurant?.data?.cuisines}</h2>
            <h3>Delivery Time:{props?.restaurant?.data?.deliveryTime} minutes</h3>
        </div>
        

    )
}

const Body=()=>{
    return(
        <div className="restaurantCard">
            <RestaurantCard restaurant={ResList[0]}/>
        </div>
    )
}