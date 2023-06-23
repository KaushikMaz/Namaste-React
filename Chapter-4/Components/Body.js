import React from "react"
import { IMG_CDN_URL, Restaurants_API } from "./Constants"
import {Link} from "react-router-dom"
import {filterData} from "./HelperFunctions"

const RestaurantCard=({name, cloudinaryImageId, cuisines,deliveryTime})=>{
    
    return(
        
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h3>Delivery Time:{deliveryTime} minutes</h3>
        </div>
        

    )
}

const Body=()=>{
    const [searchText, setSearchText]=React.useState("")
    const [filteredRestaurant, setfilteredRestaurant]=React.useState([])
    const [allRestaurant, setAllRestaurant]= React.useState([])
    const changeHandler=(e)=>setSearchText(e.target.value)

    React.useEffect(()=>{
        getRestaurants()
    },[])

    async function getRestaurants(){
        const data= await fetch(Restaurants_API)
        const json= await data.json()
        setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    }

    
    const filterSearch=()=>{ 
        const data=filterData(searchText,allRestaurant)
        return setfilteredRestaurant(data)
    }

    
    return(
        <>
        <div className="searchContainer">
            <input type="text" placeholder="Enter Your search" className="searchInput" value={searchText} onChange={changeHandler}/>
            <button onClick={filterSearch} className="searchButton">Search</button>

        </div>
        <div className="restaurantCard">
            {filteredRestaurant.map(restaurant=>{
                return(<Link to={"/restaurant/"+ restaurant.data.id} key={restaurant?.data?.id}><RestaurantCard {...restaurant.data} /></Link>)
            })}
            {/* <RestaurantCard {...ResList[0].data}/>
            <RestaurantCard {...ResList[1].data}/>
            <RestaurantCard {...ResList[2].data}/>
            <RestaurantCard {...ResList[3].data}/>
            <RestaurantCard {...ResList[4].data}/> */}
        </div>
        </>
    )
}

export default Body;