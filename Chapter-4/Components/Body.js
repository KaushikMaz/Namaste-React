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
    const [RestaurantList, setRestaurantList]=React.useState(ResList)
    const changeHandler=(e)=>setSearchText(e.target.value)
    
    const filterData=(searchText,RestaurantList)=>{
        return (RestaurantList.filter(RList=>{
            return RList.data.name.includes(searchText)
        }))
    }

    const filterSearch=()=>{ 
        const data=filterData(searchText,RestaurantList)
        return setRestaurantList(data)
    }

    
    return(
        <>
        <div className="searchContainer">
            <input type="text" placeholder="Enter Your search" className="searchInput" value={searchText} onChange={changeHandler}/>
            <button onClick={filterSearch}>Search</button>

        </div>
        <div className="restaurantCard">
            {RestaurantList.map(restaurant=>{
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