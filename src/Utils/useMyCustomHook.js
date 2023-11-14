import { useEffect, useState } from "react";

useMyCustomHook = (params)=>{
    console.log(params)
    const [resData , setresData] = useState("");
    useEffect(()=>{
        fetchDataUsingId(params)
    }, []);

    fetchDataUsingId =  async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/"+params.id);
        const json = await res.json();
        console.log(json);
        setresData(json);
    }

    return resData;
}


export default useMyCustomHook;