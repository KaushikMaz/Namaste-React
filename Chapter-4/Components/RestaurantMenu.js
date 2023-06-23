import React from "react"
// import {useParams} from "react-router-dom"
import useRestaurant from "./utils/useRestaurant"


// const RestaurantMenu=()=>{
//     const{resid}=useParams()
//      const restaurant= useRestaurant(resid)
//     // const params=useParams()
//     // console.log(params)

//     // const [restaurant, setRestaurant]=React.useState([])

//     // React.useEffect(()=>{
//     //     getRestaurantInfo()
//     // },[])

//     // async function getRestaurantInfo(){
//     //     const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9172533&lng=77.6187961&restaurantId=65797&submitAction=ENTER" )
//     //     const json= await data.json()
//     //     console.log(json.data)
//     //     setRestaurant(json.data)
//     // }

//     // const {name, cuisines, costForTwoMessage}=restaurant?.cards[0]?.card?.card?.info
//     // const{itemCards}= restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
//     return(
        
//         // <div>
//         //     <h1>{resid}</h1>
//         //     <h1>{name}</h1>
//         //     <p>{cuisines.join(",")}-{costForTwoMessage}</p>
//         //     <h2>MENU</h2>
//         //     <ul>
//         //         <li>{itemCards[0].card.info.name}</li>
//         //     </ul>

//         // </div>
//     )
// }

export default RestaurantMenu;