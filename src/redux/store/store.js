import { configureStore } from "@reduxjs/toolkit"
import  usersReducer from "../features/user/usersSilceAPI";
import adminsReducer from "../features/admin/sildeAdmin";
import sellingReducer from "../features/selling/sellingSilceAPI";
import productReducer from "../features/productSildeAdmin/productSilceAPI"
import loginReducer from "../features/login/loginSlice";
const store = configureStore({
    reducer:{
        users: usersReducer,
        admins: adminsReducer,
        selling: sellingReducer,
        product: productReducer,
        login: loginReducer
    }
})

export default store;
