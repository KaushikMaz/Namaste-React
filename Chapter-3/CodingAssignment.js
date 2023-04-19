import React,{createElement} from"react";
import ReactDOM from "react-dom/client";


//Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
const header=createElement("h1",{}, "This is the h1 element")
const header2=createElement("h2",{},"This is the h2 element")
const header3=createElement("h3",{},"This is the h3 element")
const mainHeader=createElement("div",{class:"title"},[header,header2,header3])

//- Create the `same element using JSX`
const newHeader = <h1>This is the h1 element</h1>;
const newHeader2 = <h2>This is the h2 element</h2>;
const newHeader3 = <h3>This is the h3 element</h3>;
const NewMainHeader = (
  <div className="newtitle">
    {newHeader}
    {newHeader2}
    {newHeader3}
  </div>
);

//Create a functional component of the same with JSX
const MainHeader=()=> {
  return (
    <div className="title">
      <h1>This is the h1 element</h1>
      <h2>This is the h2 element</h2>
      <h3>This is the h3 element</h3>
    </div>
  );
}

export default MainHeader;


//Pass attribute` into the tag in `JSX`
const newMainHeader=()=> {
    return (
       
      <div className="title">
        <h1 style={{color:"blue"}}>This is the h1 element</h1>
        <h2 style={{color:"pink"}}>This is the h2 element</h2>
        <h3 style={{color:"yellowgreen"}}>This is the h3 element</h3>
      </div>
      
    );
  }

//   Composition of Component (Add a component inside another)
const Component=()=>{<h1>This is another component</h1>}

const newMainHeader1=()=> {
    return (
      <> 
      <newMainHeader/>
      <Component/>
      </>
    );
  }