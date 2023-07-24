import React from "react";
import Header from "./Components/Header"
import { Outlet } from "react-router-dom";
// import UserContext from "./Components/userContext"
import {Provider} from "react-redux";
import store from "./Components/store";



const AppLayout=()=>{
    // const [user,setUser]=React.useState({
    //     name:"Kaushik Mazumdar",
    //     email:"support@gmail.com"
    // })
    return(
        <Provider store={store}>
            <Header/>
            <Outlet/>
        </Provider>
    )
    
 
}
export default AppLayout;