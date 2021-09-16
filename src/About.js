import { Component } from "react";


class About extends Component{
    
    state = {name: "Mark", contact: " 039520123", email: "mark@gmail.com"};
    
    render(){
        const name = "Mark";

        const  fullName = () => "Mark Sakaberg"
        const ShowAge = false;
        const  age = 25;
        const miss = 0;
        return(
            <div>
                <h1>About Component</h1>
                <h2>{this.state.name}</h2>
                <h2>{this.state.contact}</h2>
                <h2>{this.state.email}</h2>
                <h1>{name}</h1>
                <h2>{fullName()}</h2>
                {
                    ShowAge ? age : <h2>{miss}</h2>
                }
                <hr/>
            </div>
        )
    };
}
export default About;