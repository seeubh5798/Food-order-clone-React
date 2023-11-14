import { useEffect, useState } from "react";



useOnlineStatus = ()=>{
    //  try to check if online
    const [onlineStatus , setonlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline" , ()=>{
            console.log("offline status hook called")
            setonlineStatus(false);
        })  ;

        window.addEventListener("online" , ()=>{
            console.log("online status hook called")
            setonlineStatus(true);
        })  
    },[])
    



    // return boolean value 
    return onlineStatus;


}


export default useOnlineStatus;