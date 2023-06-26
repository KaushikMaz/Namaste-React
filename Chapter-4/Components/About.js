import React from "react"
import UserContext from "./userContext";

class About extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <h2>This is the About Us Page</h2>
            <UserContext.Consumer>{(value)=><h2>{value.name}-{value.status}</h2>}</UserContext.Consumer>
            </>
        )
    }

}

export default About;