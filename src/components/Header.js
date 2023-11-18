import { HeaderLogoUrl } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
// let btn = "Login";

   console.log("header rendered");
   let [btn , setbtn] = useState("LogIn");

   const status = useOnlineStatus();

    return (
       <div className="header flex">
          <div className="logo-container w-20">
          <img className="logo" src={HeaderLogoUrl} />
          </div>
         
         <div className="nav-items">
          <ul className="flex">
            <li> { status == true ? "Online" : "Offline"}</li>
             <li> <Link to="/"> Home </Link> </li>
             <li> <Link to="/about"> About Us </Link> </li>
             <li> <Link to="/contact"> Contact Us  </Link></li>
             <li> Cart </li>
             <li> <button className="btn-login" onClick={
               ()=>{
                 btn =  btn === "LogIn" ? "Log Out" : "LogIn";
                  setbtn(btn);        // as soon as state variable changes react re renders the component itself.
               }
             }>{btn}</button></li>
          </ul>
         </div>
 
       </div>
    )
 }

 export default Header ;