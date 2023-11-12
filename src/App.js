
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
// because of this complexity for simple html rendering , JSX came to the humanity.
import { createBrowserRouter , RouterProvider } from "react-router-dom";


const AppLayout = ()=>{
   return (
     <div className="app">
      <Header />
      <Body />
     </div>
   )
}

// creating routing configuration - configuration means defining some info on what will happen on that specific routes
const routes = createBrowserRouter([
  {path : "/" , element : <AppLayout />},
  {path : "/about" , element : <About />},
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />)   