    import React,{createElement} from "react";
    import ReactDOM from "react-dom/client";

    const root=document.getElementById("root")
    const heading=document.createElement("h1");
    heading.innerHTML="Namaste React"
    root.appendChild(heading)


    const headingNew=createElement("h1",{},"Namaste Akshay Saini")
    const heading2=createElement("h2",{},"Namaste Sreenu Saini")
    const container=createElement("div",{id:"container"},[headingNew,heading2])
    const rootNew=ReactDOM.createRoot(document.getElementById("root"));
    rootNew.render(container)

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
   const Title=()=> <h1 id="title" key="h2">Food Villa</h1> 
   

//    React component

const AppLayout=()=>{
    return(
        <div>
            <Title/>
            <div className="nav-items">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>)




        }
rootNew.render(<AppLayout/>)

