import React from "react";
import { Link } from "react-router-dom";

//class component
class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo: { 
            name: "Dummy name",
            location: "Default Location",
        }
        };
        
       
      
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Sarvesh2120");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        });
       
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    componentWillUnmount(){
        console.log("it calls when we leave the page");
    }

    

    render(){
        // console.log("child render")
        const {name, location,avatar_url,WebName, followers} = this.state.userInfo;

      
      

        return(
            <div className="max-w-sm m-2 overflow-hidden rounded shadow-lg items-center justify-center text-center pb-2">
                <div className="user-card">
                <img className="w-full" src="https://static.displate.com/280x392/displate/2022-11-26/418f2ea00ab3707b5d78c5cb371ffccc_bf11e1878a760a6558e805bb5c0f9f3b.jpg" alt="img" />
                <div className="px-6 py-4 mb-2 text-xl font-bold">
                <h2 className="text-base text-gray-700" >Name:{name}</h2>
                <h3 className="text-base text-gray-700" >Location: {location}</h3>
                <h4 className="text-base text-gray-700" >Followers: {followers}</h4>
                </div>

               
                
            </div>
            <div className="">
               <Link to="/">
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Contact for food</button>
                
               </Link>
                </div> 
            </div>
        )
    }
}

export default UserClass;