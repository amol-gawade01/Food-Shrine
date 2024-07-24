import React, { lazy,Suspense } from "react";
import ReactDom from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";
import Foot from "./components/Foot";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Shimmermen from "./components/Shimmermen";


const RestaurantInfoLy = lazy( () => {return new Promise (resolve => {
  setTimeout(() => {
    resolve(import("./components/RestaurantInfo"))
  }, 3000);
});
}); 

const AppLayout = () => {
  

  
 return <Provider store={appStore} > 
  <div className="AppLay flex flex-col min-h-screen">
   
    <Heading />
    <Outlet />
    <Foot />
  </div>
  </Provider>
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:resID",
        element: (<Suspense fallback={<Shimmermen/>}><RestaurantInfoLy/></Suspense>),
      },{
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/users/:username",
        element:<Body/>
      }
    ],
  },{
    path:"/login",
    element:
    <Provider store={appStore} >
      <LoginPage />
      </Provider>
  }
]);



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
