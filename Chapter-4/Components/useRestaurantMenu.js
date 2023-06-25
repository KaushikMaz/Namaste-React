import React from "react"
import { Restaurants_MENU_API } from "./Constants"

const useRestaurantMenu=(resId)=>{
    const [restaurant,setRestaurant]=React.useState([])

    React.useEffect(()=>{
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo(){
        const data= await fetch(Restaurants_MENU_API+resId)
        const json=await data.json()
        setRestaurant(json.data)
    }

    return restaurant;
}

export default useRestaurantMenu;