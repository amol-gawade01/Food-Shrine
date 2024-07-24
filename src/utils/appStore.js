import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import loginReducer from "./loginSlice"


const defaultMiddlewareConfig = {
    serializableCheck: {
      ignoredPaths: ["cart.map1","cart.map2"],
    }
  };


const appStore = configureStore({
    reducer:{
        cart:cartReducer,
        login:loginReducer,
        
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(defaultMiddlewareConfig),
    
});

export default appStore;