import User  from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);

        // console.log(  "Calling parent constructor")
    }
 
    componentDidMount(){
        // console.log("Component did mount parent called")
    }


    render(){
        // console.log("Caliling a parent render")


        return(
                <div className="flex justify-center items-center py-4">

                    {/* <div>
                       <UserContext.Consumer>

                       </UserContext.Consumer>
                    </div> */}
                         
                    <UserClass name={"first"} location={"Gorakhpur"}  />
                   
        
                </div>
        

        );
    }
}

export default About;

/*  

-Mounting Cycle

constructor(dummy)
Render(dummy)
    <HTML Dummy>
Component Did Mount
    <API Call>
    <this.setState> -- state variable is updated





----UPDATE cycle

    render(API data)
    <HTML (new API data)>
    Component did update

*/