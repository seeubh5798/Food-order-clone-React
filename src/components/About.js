import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

        constructor(props){
            super(props)
            console.log("parent constructor")
        }


        componentDidMount(){
            console.log("parent componentdidmount called")
        }
    render(){
        console.log("parent component")
        return (
                    <>
                    {/* the below 4 will help understand react component life cycle in a better way - render phase and commit phase */}
                    <h1> This is about us</h1>
                    <UserClass name="Shubham" grad="IIT Grad"/>
                    <UserClass name="Priyal" grad="NIT Grad"/>
                    <UserClass name="Shakhi" grad="NIT-A Grad"/>
                    <UserClass name="Priya" grad="IIT-B Grad"/>
                    </>
                    
                )
    }
}
// const About = ()=>{
//     return (
//         <>
//         <h1> This is about us</h1>
//         <UserClass name="Shubham Kumar Agrawal" grad="IIT Grad"/>
//         </>
        
//     )
// }

export default About;