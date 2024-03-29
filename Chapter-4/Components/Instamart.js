import React, {useState} from "react";



const Section=({title, description, isVisible, setIsVisible})=>{
    // const [isVisible, setIsVisible]= useState(false)
    return(
        <div style={{border:"1px solid black",margin:"10px", textAlign:"center" }}>
            <h1>{title}</h1>
            {isVisible?(<><p>{description}</p><button onClick={()=>setIsVisible(false)}>Hide</button></>):(<button onClick={()=>setIsVisible(true)}>Show</button>)}
            
            
        </div>
    )
}

const Instamart=()=>{
    const[visibleSection,setVisibleSection]=useState("about")
    
    const toggle = (section) => {
        if (visibleSection === section) {
          setVisibleSection("");
        } else {
          setVisibleSection(section);
        }
      };
            

    
    return(
        <>
            <Section title={"About"} isVisible={visibleSection ==="about"} setIsVisible={()=>toggle("about")} description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text)."}/>
            <Section title={"Contact"} isVisible={visibleSection ==="contact"} setIsVisible={()=>toggle("contact")} description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "}/>
            <Section title={"Team "} isVisible={visibleSection ==="team"} setIsVisible={()=>toggle("team")} description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "}/>
        </>
        )

    }
export default Instamart;