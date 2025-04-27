import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"Default User",
})

export default UserContext;


/**
 * this context is global kind of object
 * create a context
 * react gives a utlity function to createcontext
 * 
 */