import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUsersByID, fetchAllDataUsers, fetchCreateUsers, fetchDataUsersByID, fetchUpdateUsersById } from "../../../apis/usersApi";


const initialState = {
    allUsers: [],
    users:{},
    isLoading:false,
    isLoadingCreate:false,
    isLoadingDelete:false,
    errors:{}
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

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
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
    }
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
export const { actUpdateLoadingCreate } = usersSlice.actions;

export default usersSlice.reducer;