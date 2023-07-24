import React from "react"
import {useParams} from "react-router-dom"
import useRestaurantMenu from "./useRestaurantMenu"
import { addItem, clearCart, removeItem } from "./cartSlice"
import { useDispatch } from "react-redux"

const RestaurantMenu=()=>{
    
    const {resId}=useParams()
    const Restaurant=useRestaurantMenu(resId)
    const dispatch= useDispatch();
    const addFoodItem=(item)=>{
        dispatch(addItem(item))
    }
       if (Restaurant.length === 0) {
        return <p>Loading...</p>;
      }

      const {name,cuisines,costForTwoMessage}=Restaurant?.cards[0]?.card?.card?.info;
      const{itemCards}= Restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
  
      

    return(
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")}-{costForTwoMessage}</p>
                     
            <h2>MENU</h2>
            <ul>
                 {itemCards.map(item=><li key={item?.card?.info?.id}>{item?.card?.info?.name}-{item.card.info.price}-
                <button onClick={()=>addFoodItem(item)}style={{background:"lightgreen",padding:"5px",margin:"10px"}}>Add</button></li>)} 
                  
            </ul>  
         
        </div>
    )
}

export default RestaurantMenu;