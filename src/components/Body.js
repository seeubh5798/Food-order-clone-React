import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockdata";
// default export is imported like this
const Body = ()=>{

    // first way using for loop
 //    array = [];
 //    for(var i =0 ;i<resList.length ;i++){
 //       array.push(<RestaurantCard resData={resList[i]} key ={resList[i].name}/>)
 //   }
 
    return (
       <div className="body">
          <div className="search"> Search </div>
          <div className="res-container">
             {/* {RestaurantCard()}
             <RestaurantCard resData={resList[0]}></RestaurantCard>
             <RestaurantCard resData={resList[1]}></RestaurantCard>
             <RestaurantCard resData={resList[2]}></RestaurantCard> */}
             {/* second way for rendering data using map */}
             {
                resList.map((res)=>{
                   return <RestaurantCard resData={res}  key={res.name}/>
                })
             }
             {/* always use key and do not use use index as key , important for react optimisation  */}
 
             {/* <ul style={{ display : "flex"}}>{array}</ul>    */} 
             {/* rendering data using first way */}
          </div>
 
       </div>
    )
 }

 export default Body;