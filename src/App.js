
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
// because of this complexity for simple html rendering , JSX came to the humanity.


const AppLayout = ()=>{
   return (
     <div className="app">
      <Header />
      <Body />
     </div>
   )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)   