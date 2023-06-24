import React from "react"

const useOnline=()=>{
    const[online,setOnline]=React.useState(true)
    const handleOnline=()=>setOnline(true)
    const handleOffline=()=>setOnline(false)
    

    React.useEffect(()=>{
        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)

        return()=>{
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)
        };
    },[])

   
    return online;
}

export default useOnline;