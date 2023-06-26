    import React,{createElement, lazy, Suspense} from "react";
    import ReactDOM from "react-dom/client";
    import AppLayout from "./Chapter-4/App"
    import About from "./Chapter-4/Components/About"
    import Contact from "./Chapter-4/Components/Contact"
    import Error from "./Chapter-4/Components/Error";
    import RestaurantMenu from "./Chapter-4/Components/RestaurantMenu";
    import Body from "./Chapter-4/Components/Body";
    import Instamart from "./Chapter-4/Components/Instamart";
    import { createBrowserRouter, RouterProvider } from "react-router-dom";

    // const Instamart=lazy(()=>import("./Chapter-4/Components/Instamart"))
    // const Contact =lazy(()=> import("./Chapter-4/Components/Contact"))
    const appRouter=createBrowserRouter([{
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/about",
                element:<About/>
                },
            {   path:"/",
                element:<Body/>,

                },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },{
                path:"/instamart",
                element:(<Suspense fallback={<h1>Loading...</h1>}><Instamart/></Suspense>)
            }
        ]
    }])

    // const root=document.getElementById("root")
    // const heading=document.createElement("h1");
    // heading.innerHTML="Namaste React"
    // root.appendChild(heading)


    // const headingNew=createElement("h1",{},"Namaste Akshay Saini")
    // const heading2=createElement("h2",{},"Namaste Sreenu Saini")
    // const container=createElement("div",{id:"container"},[headingNew,heading2])
    const rootNew=ReactDOM.createRoot(document.getElementById("root"));
    // rootNew.render(container)

            /* Header
                -Logo
                -Nav Items
                -Cart
            Body
                -Search Bar
                -Restaurant List
                -Restaurant Card
                    -Image
                    -Name
                    -Rating
                    -Cusines
            Footer
                -Links
                -Copyright
        */
    // JSX
    // React Element
//    const Title=()=> <h1 id="title" key="h2">Food Villa</h1> 
   

//    React component

// const AppLayout=()=>{
//     return(
//         <div>
//             <Title/>
//             <div className="nav-items">
//                 <ul>
//                     <li></li>
//                 </ul>
//             </div>
//         </div>)




//         }
rootNew.render(<RouterProvider router={appRouter}/>)

