import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import Userslice from "./Userslice";

const Store = configureStore({
     reducer:{
         cart: Cartslice,
         user: Userslice
     }

})

export default Store