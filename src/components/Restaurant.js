import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Restaurant = ()=>{

    const [resData , setresData] = useState("");
    const params = useParams();
    console.log(params);

    useEffect(()=>{
        fetchDataUsingId(params)
    }, []);

    fetchDataUsingId =  async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/"+params.id);
        const json = await res.json();
        console.log(json);
        setresData(json);
    }

    return (
        <div>
            <Link to="/"> <button> Back to Home</button> </Link>
            <h1> Title - {resData.title}</h1>
            <h4>UserId - {resData.userId}</h4>
            <span> completed - {resData?.completed?.toString()}</span>
        </div>
    )
}

export default Restaurant;