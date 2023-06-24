import React from "react"
import {useParams} from "react-router-dom"
import { Restaurants_MENU_API } from "./Constants"

const RestaurantMenu=()=>{
    const [Restaurant, setRestaurant]=React.useState([])
    const {resId}=useParams()

    React.useEffect(()=>{
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo(){
        const data= await fetch(Restaurants_MENU_API+resId)
        const json=await data.json()
        setRestaurant(json.data)
    }
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