import { configureStore } from "@reduxjs/toolkit"
import  usersReducer from "../features/user/silceUser";
import adminsReducer from "../features/admin/sildeAdmin"
import sellingReducer from "../features/selling/sellingSilde";
import productReducer from "../features/productSildeAdmin/productSilde"
const store = configureStore({
    reducer:{
        users: usersReducer,
        admins: adminsReducer,
        selling: sellingReducer,
        product: productReducer
    }
})

export default store;
