import { configureStore } from "@reduxjs/toolkit"
import  usersReducer from "../features/user/usersSilceAPI";
import sellingReducer from "../features/selling/sellingSilceAPI";
import productReducer from "../features/productSildeAdmin/productSilceAPI";
import shoppingReducer from "../features/shopping/shoppingSliceAPI"

const store = configureStore({
    reducer:{
        users: usersReducer,
        selling: sellingReducer,
        product: productReducer,
        allCart: shoppingReducer,
    }
})

export default store;
