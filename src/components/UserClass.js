import React from "react";


class UserClass extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                school : "Mechanical Sciences",
                gradYear : 2021,
                count : 0,
                avatar : ""
            }

            console.log("child constructor called from Userrclass" , this.props.name);
            debugger
        }

        componentDidMount(){
            console.log("child componentdidmount called" , this.props.name);
            this.getAvatar();
        }
                 
        getAvatar = async()=>{
           const res = await fetch(`https://api.github.com/users/${this.props.github}`);
           const json = await res.json();

           console.log("avatar " +  this.props.name + "is" + json.avatar_url);

           this.setState({
            avatar : json.avatar_url
           })
        }

        componentDidUpdate(){
            console.log("child update called" , this.props.name);
        }
        render(){
            console.log("child render is called from userclass" , this.props.name)
            return (
                <div className="userclass">
                    <button onClick={()=>{
                        // this.state.count++;  // we cannot do like this in updating state variable directly 
                        // use this.setState from React in class component

                        this.setState({
                            count : this.state.count +1
                        })
                        console.log(this.state.count);
                    }}>
                        Increase Count
                    </button>
                    <h1>Name - {this.props.name}</h1>
                    <h4>College - {this.props.grad}</h4>
                    <h4>Schoool - {this.state.school}</h4>
                    <h4>Year of Graduation - {this.state.gradYear}</h4>
                    <h1>Visitors - {this.state.count}</h1>
                    <img src={this.state.avatar} />
                </div>
            )
        }

}

export default UserClass;