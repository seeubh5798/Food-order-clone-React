import { HeaderLogoUrl } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
// let btn = "Login";

   console.log("header rendered");
   let [btn , setbtn] = useState("LogIn");

   const status = useOnlineStatus();

    return (
       <div className="header flex justify-between bg-pink-200 shadow-lg">
          <div className="logo-container w-20">
          <img className="logo" src={HeaderLogoUrl} />
          </div>
         
         <div className="nav-items">
          <ul className="flex p-4 mx-3">
            <li className={`mx-3 ${status == true ? "Online " : "Offline"}`}> You are { status == true ? "Online 🟢 " : "Offline 🔴"}</li>
             <li className="mx-3"> <Link to="/"> Home </Link> </li>
             <li className="mx-3"> <Link to="/about"> About Us </Link> </li>
             <li className="mx-3"> <Link to="/contact"> Contact Us  </Link></li>
             <li className="mx-3"> Cart </li>
             <li className="mx-3"> <button className="btn-login" onClick={
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