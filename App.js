
import React from "react";
import ReactDOM from "react-dom/client";


// because of this complexity for simple html rendering , JSX came to the humanity.

const Header = ()=>{
   return (
      <div className="header">
         <div className="logo-container">
         <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=" />
         </div>
        
        <div className="nav-items">
         <ul>
            <li> Home </li>
            <li> About Us </li>
            <li> Contact Us </li>
            <li> Cart </li>
         </ul>
        </div>

      </div>
   )
}


const RestaurantCard = (props)=>{
   // console.log(props);
   const { resData} = props;
   const { name , cuisine , rating, ETA } = resData;
   return (
      <div className="res-card" id={name}>
          <img className="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/8/20382168/2cc9d74a2fef70212bba7143096e3a8f.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" />
          <h3> {name} </h3>
          <h5>  {cuisine}</h5>
          <h5> Stars {rating}</h5>
          <h5> {ETA} </h5>
      </div>
   )
}


const resList = [
   {
      name : 'Naintara1',
      cuisine : 'North Indian',
      rating : "4.5",
      ETA :"20 mins"
   },
   {
      name : 'Naintara2',
      cuisine : 'North Indian',
      rating : "4.5",
      ETA :"20 mins"
   },
   {
      name : 'Naintara3',
      cuisine : 'North Indian',
      rating : "4.5",
      ETA :"20 mins"
   },
   {
      name : 'Naintara4',
      cuisine : 'North Indian',
      rating : "4.5",
      ETA :"20 mins"
   },
   {
      name : 'Naintara5',
      cuisine : 'North Indian',
      rating : "4.5",
      ETA :"20 mins"
   }
   ,{
      name : 'Naintara6',
      cuisine : 'North Indian',
      rating : "4.5",
      ETA :"20 mins"
   }
]

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


            {/* <ul style={{ display : "flex"}}>{array}</ul>    */} 
            {/* rendering data using first way */}
         </div>

      </div>
   )
}


const HeadingComponent =  ()=>{
   return (
     <div className="app">
      <Header />
      <Body />
     </div>
   )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)   