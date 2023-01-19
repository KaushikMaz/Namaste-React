    import {createElement} from "react";
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


    // JSX
    // React Element
   const heading3= <h1 id="title" key="h2">Namaste India</h1> 

//    React component

