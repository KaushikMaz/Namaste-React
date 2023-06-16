import React from "react"
import ResList from "../ResList"

const RestaurantCard=({name, cloudinaryImageId, cuisines,deliveryTime})=>{
    
    return(
        
        <div className="card">
            <img src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
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
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json= await data.json()
        setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    }

    const filterData=(searchText,Restaurant)=>{
        return (Restaurant.filter(RList=>{
            return RList?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
        }))
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
                return(<RestaurantCard {...restaurant.data} key={restaurant?.data?.id}/>)
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