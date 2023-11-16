
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./Error";
// because of this complexity for simple html rendering , JSX came to the humanity.
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router-dom";
import Restaurant from "./components/Restaurant";

const About = lazy(()=> import('./components/About')) ;
//lazy loading about.js

const AppLayout = ()=>{
   return (
     <div className="app">
      <Header />
      <Outlet />
     </div>
   )
}

// creating routing configuration - configuration means defining some info on what will happen on that specific routes
const routes = createBrowserRouter([
  {
    path : "/" ,
    element : <AppLayout /> ,
    errorElement : <Error />,
    children :[
      {path : "/" , element : <Body />},
      {path : "/about" , element : <About />},
      {path : "/contact" , element : <Contact />},
      {path : "/restaurant/:id" , element : <Restaurant />}
    ]
  
  },
  // {path : "/about" , element : <About />},
  // {path : "/contact" , element : <Contact />},
  // {path : "*" , element : <Contact />},
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />)   