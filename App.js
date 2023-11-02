
import React from "react";
import ReactDOM from "react-dom/client";


// because of this complexity for simple html rendering , JSX came to the humanity.








const HeadingComponent =  ()=>{
   return (
      <h4> I am the heading component for food order app</h4>
   )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)   