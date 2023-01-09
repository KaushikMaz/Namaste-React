const root=document.getElementById("root")
const heading=document.createElement("h1");
heading.innerHTML="Namaste React"
root.appendChild(heading)



const headingNew=React.createElement("h1",{},"Namaste Akshay Saini")
const heading2=React.createElement("h2",{},"Namaste Sreenu Saini")
const container=React.createElement("div",{id:"container"},[headingNew,heading2])
const rootNew=ReactDOM.createRoot(document.getElementById("root"));
rootNew.render(container)
