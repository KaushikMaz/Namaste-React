import React from "react"
import {filterData} from "./HelperFunctions"

const useFilter=(searchText, API)=>{
    const [filteredRestaurant, setfilteredRestaurant]=React.useState([])
    const [allRestaurant, setAllRestaurant]= React.useState([])

    React.useEffect(()=>{
        getRestaurants()
    },[])

    async function getRestaurants(){
        const data= await fetch(API)
        const json= await data.json()
        setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    }

    const filterSearch=()=>{ 
        const data=filterData(searchText,allRestaurant)
        return setfilteredRestaurant(data)
    }

    return [filterSearch,filteredRestaurant]


}

export default useFilter;