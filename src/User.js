import React,{Component} from "react";

export class User extends Component{
    
    constructor(props){
        super(props);
        this.welcome ={
            message: 'State in React should be simple'
        }
        this.car = {
            toyota: "Vios", honda: "Jass", masda: "masda3"
        }
    }

    animal = {
           cat : "koraj",
           bird : "kayang"
    }

    render(){
        return(
            <div>
                <h1>{this.welcome.message}</h1>
                <h1>Car: {this.car.honda} {this.car.toyota} {this.car.masda}</h1>
                <h1>Animal: {this.animal.cat} {this.animal.bird}</h1>
            </div>
            
        )
    }
}
