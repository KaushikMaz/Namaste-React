import React from "react"
import {useParams} from "react-router-dom"
import useRestaurantMenu from "./useRestaurantMenu"

const RestaurantMenu=()=>{
    
    const {resId}=useParams()
    const Restaurant=useRestaurantMenu(resId)

    if (Restaurant.length === 0) {
        return <p>Loading...</p>;
      }
    const {name, cuisines, costForTwoMessage}=Restaurant?.cards[0]?.card?.card?.info
    const{itemCards}= Restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")}-{costForTwoMessage}</p>

            <h2>MENU</h2>
            <ul>
                {itemCards.map(item=><li>{item?.card?.info?.name}-{item.card.info.price}</li>)}
            </ul>  
        

        </div>
    )
}

export default RestaurantMenu;