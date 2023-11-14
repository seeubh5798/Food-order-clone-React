import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockdata";
// default export is imported like this
import { useState , useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

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
   let [ restData , setrestData] = useState([]); 
   let [filteredData , setFilteredData] = useState([]);

   // this can also be declared as - 
   // const arr = useState(restData);
   // const resdata = arr[0];
   // const serresdata = arr[1];     // no one knows this way but it's awesome and useState return an array.
   
   //we pass default value in useState args.
console.log("rerendering BODY COMPONENT")

   
const dummy = ()=>{
   console.log("button clicked form dummy");
   console.log(restData) ;
   restData = restData.filter( (res) => res.id < 10 );

   console.log(restData) ;
   setrestData(restData);
}

// const status = useOnlineStatus();

//    if(!status){
//       return(
//          <div><h3>You are offline , pls check internet connection</h3></div>
//       )
//    }

    // first way using for loop
 //    array = [];
 //    for(var i =0 ;i<resList.length ;i++){
 //       array.push(<RestaurantCard resData={resList[i]} key ={resList[i].name}/>)
 //   }
   useEffect(()=>{
      console.log("useEffect cb called from body");
       fetchData();
   } , []);

  
   var mid;
   const fetchData = async()=>{
      
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
      mid = await res.json();
      console.log(mid);
      setrestData(mid);
      setFilteredData(mid);
   }

   const getAll = ()=>{
      restData = mid;
      setrestData(restData);
   }

   const status = useOnlineStatus();

 
   // console.log("before use effect");
   let [ searchText , setSearchText] =  useState('')

   // this is conditional rendering concept - important for interview perspective
   if(status === false){
      return (
         <div><h3>You are offline , pls check internet connection</h3></div>
      )
   }
   if(restData.length == 0){
      return <Shimmer />
   }
    return (
       <div className="body">
          <div className="filter"> <button className="filter-btn" onClick={dummy} >Top Rated Restaurants 1</button> </div>
          {/* <div className="filter"> <button className="filter-btn" onClick={()=>{
            restData = restData.filter( (res) => res.id < 10 );
            setrestData(restData);
          }}>Top Rated Restaurants</button>
         </div> */}

         <div className="search"> 
            <input type="text" className="search-box" value={searchText}  onChange={(e)=>{
               // searchText = e.target.value;     // it will change the value but not in DOM , need reconcilation to be trgiggered by statechange function here

               setSearchText(e.target.value);
            }}/>
            <button onClick={()=>{
               // filter the res cards and update the UI
               console.log(searchText);
            const newData =   restData.filter( (res)=>{
               if(searchText !== "")
                  return res.title.toLowerCase().includes(searchText.toLocaleLowerCase());
               
               return true
               });

               // setrestData(newData)  // this updates restData
               setFilteredData(newData)


            }}> Search</button>
         
         </div>
         {/* <div className="filter"> <button className="filter-btn" onClick={getAll}>All Restaurants</button> 
         </div> */}
          <div className="res-container">
             {/* {RestaurantCard()}
             <RestaurantCard resData={resList[0]}></RestaurantCard>
             <RestaurantCard resData={resList[1]}></RestaurantCard>
             <RestaurantCard resData={resList[2]}></RestaurantCard> */}
             {/* second way for rendering data using map */}
             {
                filteredData.map((res , index)=>{
                   return <Link  key={index} to={`restaurant/${res.id}`}><RestaurantCard resData={res} /></Link>
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