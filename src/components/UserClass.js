import React from "react";


class UserClass extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                school : "Mechanical Sciences",
                gradYear : 2021
            }
        }

        render(){
            return (
                <div className="userclass">
                    <h1>Name - {this.props.name}</h1>
                    <h4>College - {this.props.grad}</h4>
                    <h4>Schoool - {this.state.school}</h4>
                    <h4>Year of Graduation - {this.state.gradYear}</h4>
                </div>
            )
        }

}

export default UserClass;