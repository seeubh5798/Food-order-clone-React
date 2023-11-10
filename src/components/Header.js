import { HeaderLogoUrl } from "../Utils/constants";
import { useState } from "react";
const Header = ()=>{
// let btn = "Login";

   console.log("header rendered");
   let [btn , setbtn] = useState("LogIn")
    return (
       <div className="header">
          <div className="logo-container">
          <img className="logo" src={HeaderLogoUrl} />
          </div>
         
         <div className="nav-items">
          <ul>
             <li> Home </li>
             <li> About Us </li>
             <li> Contact Us </li>
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