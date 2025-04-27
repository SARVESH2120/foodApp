import { useState, useContext } from "react";
import {LOGO_URL} from "../utils/constant"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{


  const [btn , setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((store)=>store.cart.items)

    return(
      <div className="flex justify-between bg-rose-100 shadow-lg  ">
        <div className="logo-container">
          <img className="w-40 rounded-md shadow-2xl" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex m-4  p-4">
            <li className="px-3 py-2 font-semibold ">Online:{onlineStatus?"✅":"🔴"}</li>
            <li className="px-3 py-2 font-semibold " ><Link to="/">Home</Link></li>
            <li className="px-3 py-2 font-semibold " ><Link to="/about">About Us</Link></li>
            <li className="px-3 py-2 font-semibold " > <Link to="/contact">Contact Us</Link> </li>
            <li className="px-3 py-2 font-semibold " > <Link to="/cart"> Cart ({ cartItems.length})</Link></li>
            <button className="login  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
                  btn === "Login" ?  setBtn("Logout") : setBtn("Login");
            }}
            >{btn}</button>

{/* <li className="px-3 py-2 font-semibold " >{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    )
  }

  export default Header;

  