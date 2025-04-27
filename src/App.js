import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const About = lazy(()=> import("./components/About"));

const AppLayout = ()=> {

  const [userName, setUserName] = useState();

  useEffect(()=>{
    const data = {
      name: "Immortal",
    }
    setUserName(data.name)
  }, [])


  return(
    
    <Provider store={appStore}>
    <div className="app">
      <UserContext.Provider value={{loggedInUser: userName}}>
      <Header />
      </UserContext.Provider>
      <Outlet /> 
    </div>
    </Provider>
    
  )

};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element: <Body />, 
      },
      {
        path: "/about",
        element:( <Suspense fallback={ <h1>This is lazy loading</h1> }> <About/> </Suspense> ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error />,
  },
  
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


