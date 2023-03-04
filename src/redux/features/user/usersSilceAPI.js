import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteUsersByID, fetchAllDataUsers, fetchCreateUsers, fetchDataUsersByID, fetchInfoMe, fetchUpdateUsersById } from "../../../apis/usersApi";
import { BE_URL, KEY_ACCESS_TOKEN } from "../../../constants/config";
import * as Jwt  from "jsonwebtoken";

const initialState = {
    allUsers: [],
    users:{},
    isLoading:false,
    isLoadingCreate:false,
    isLoadingDelete:false,
    isLogged: localStorage.getItem('isLogged') || false,
    errors:{},
    accessToken: localStorage.getItem(KEY_ACCESS_TOKEN) || "",
}

export const actFetchAllUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const data = await fetchAllDataUsers();
        return data || []
    }
)

export const actFetchUsersById = createAsyncThunk("users/actFetchUsersById", async (id) => {
    const users = await fetchDataUsersByID(id);
    return users || {}
})
export const fetchLogin = createAsyncThunk(
    "users/fetchLogin",
    async (payload) => {
      const reps = await axios.post(`${BE_URL}login`, payload);
      return reps.data;

    }
  );
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        actGetMe: (state, action) => {
            state.users = action.payload;
        },
        loginSuccess:(state, action) =>{
            state.isLogged = true;
        },
        actLogout:(state, action) =>{
            localStorage.removeItem(KEY_ACCESS_TOKEN);
            state.isLogged = false;
            state.users={};
            state.accessToken = "";
        },
        actUpdateLoadingCreate: (state,action)=>{
            state.isLoadingCreate=action.payload;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(actFetchAllUsers.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(actFetchAllUsers.rejected,(state)=>{
            state.errors={
                errors:"Đã xảy ra lỗi gọi API",
                code:""
            };
            state.isLoading=false
        })
        builder.addCase(actFetchAllUsers.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.allUsers = action.payload || []
        });

        builder.addCase(actFetchUsersById.fulfilled,(state, action) => {
            state.isLoading = false;
            state.users = action.payload || {}
        })

        builder.addCase(fetchLogin.pending, (state) => {
            state.isLoading = true;
          });

        builder.addCase(fetchLogin.rejected, (state, action) => {
            state.errors = {};
            state.isLoading = false;
          });

        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.users = action.payload.users;
            const { users, accessToken } = action.payload;
            console.log(users,'adssssssssssssssss');
            if (accessToken) {
              state.users = users;
              state.accessToken = accessToken;
              localStorage.setItem('isLogged', JSON.parse(true))
              state.isLogged = true;
              localStorage.setItem(KEY_ACCESS_TOKEN, accessToken);
            }
            state.isLoading = false;
          });
    },
    
});
export const actCreateUsers = (users)=> async (dispatch)=>{
  
    try {
        dispatch(actUpdateLoadingCreate(true));//Update status loading
        await fetchCreateUsers(users)
        await dispatch(actFetchAllUsers())// call API get all Users
    } catch (error) {
        console.log(error);
    }finally{
        dispatch(actUpdateLoadingCreate(false));// Update status loading when call API success
    }
}
export const actDeleteUsers = (id)=> async (dispatch)=>{
    try {
       await deleteUsersByID(id)
       await dispatch(actFetchAllUsers())// call API get all Users
    } catch (error) {
        console.log(error);
    }finally{
        dispatch(actUpdateLoadingCreate(false));// Update status loading when call API success
    }
}
export const actUpdateUsers = (id,payload)=> async (dispatch)=>{
  
    try {
        dispatch(actUpdateLoadingCreate(true));
        await fetchUpdateUsersById(id,payload)
        await dispatch(actFetchAllUsers())// call API get all Users
    } catch (error) {
        console.log(error);
    }finally{
        dispatch(actUpdateLoadingCreate(false));// Update status loading when call API success
    }
}
export const actReLogin = (accessToken) => async (dispatch) => {
    try {
      const decodeToken = Jwt.decode(accessToken);
      if(decodeToken?.email){
        const  repsInfo = await fetchInfoMe(decodeToken.email)
        const infoUser = repsInfo?.data?.[0];
        delete infoUser.password;
        dispatch(actGetMe(infoUser))//Using middleware => dispatch lay thong tin user ki co data
        dispatch(loginSuccess) // Middleware => Update status login success
      }
    } catch (error) {
      console.log(error);
    }
  };
export const { actUpdateLoadingCreate,actGetMe,loginSuccess,actLogout } = usersSlice.actions;

export default usersSlice.reducer;