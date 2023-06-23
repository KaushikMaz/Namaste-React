import React from "react";
import Header from "./Components/Header"

import { Outlet } from "react-router-dom";



const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
    
 
}
export default AppLayout;