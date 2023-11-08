import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockdata";
// default export is imported like this
import { useState , useEffect } from "react";

// const dummy = ()=>{
//    console.log("button clicked form dummy");
//    console.log(restData) ;
//    restData = restData.filter( (res) => res.rating > 4 );

//    console.log(restData) ;
//    change(restData)
// }

// let restData = resList;  
// this is normal JS variable


// super powerful react variable - also called state variable

const Body = ()=>{
   let [ restData , setrestData] = useState(resList); 

   // this can also be declared as - 
   // const arr = useState(restData);
   // const resdata = arr[0];
   // const serresdata = arr[1];     // no one knows this way but it's awesome and useState return an array.
   
   //we pass default value in useState args.
console.log(restData)

   
const dummy = ()=>{
   console.log("button clicked form dummy");
   console.log(restData) ;
   restData = restData.filter( (res) => res.rating > 4 );

   console.log(restData) ;
   setrestData(restData)
}

const getAll = ()=>{
   restData = resList;
   setrestData(restData);
}
    // first way using for loop
 //    array = [];
 //    for(var i =0 ;i<resList.length ;i++){
 //       array.push(<RestaurantCard resData={resList[i]} key ={resList[i].name}/>)
 //   }
   useEffect(()=>{
      console.log("useEffect cb called");
       fetchData();
   } , []);

   const fetchData = async()=>{
      
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const mid = await res.json();
      console.log(mid)
   }
   
   console.log("before use effect")
    return (
       <div className="body">
          <div className="filter"> <button className="filter-btn" onClick={dummy} onMouseOver={()=> console.log("on btn")}>Top Rated Restaurants</button> </div>
          <div className="filter"> <button className="filter-btn" onClick={()=>{
            restData = restData.filter( (res) => res.rating > 4 );
            setrestData(restData);
          }}>Top Rated Restaurants</button>
         </div>
         <div className="filter"> <button className="filter-btn" onClick={getAll}>All Restaurants</button> 
         </div>
          <div className="res-container">
             {/* {RestaurantCard()}
             <RestaurantCard resData={resList[0]}></RestaurantCard>
             <RestaurantCard resData={resList[1]}></RestaurantCard>
             <RestaurantCard resData={resList[2]}></RestaurantCard> */}
             {/* second way for rendering data using map */}
             {
                restData.map((res)=>{
                   return <RestaurantCard resData={res}  key={res.name}/>
                })
             }
             {/* always use key and do not use use index as key , important for react optimisation  */}
 
             {/* <ul style={{ display : "flex"}}>{array}</ul>    */} 
             {/* rendering data using first way for loop*/}
          </div>
 
       </div>
    )
 }

 export default Body;