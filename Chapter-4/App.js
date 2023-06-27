import React from "react";
import Header from "./Components/Header"
import { Outlet } from "react-router-dom";
import UserContext from "./Components/userContext"



const AppLayout=()=>{
    const [user,setUser]=React.useState({
        name:"Kaushik Mazumdar",
        email:"support@gmail.com"
    })
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
    
 
}
export default AppLayout;