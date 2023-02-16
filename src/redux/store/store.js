import { configureStore } from "@reduxjs/toolkit"
import  usersReducer from "../features/user/silceUser";

const store = configureStore({
    reducer:{
        users: usersReducer,
        
    }
})

export default store;
