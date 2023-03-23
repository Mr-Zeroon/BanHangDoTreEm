import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteSellingByID, fetchAllDataSelling, fetchCreateSelling, fetchDataSellingByID, fetchUpdateSellingById } from "../../../apis/sellingApi";


const initialState = {
    allSelling: [],
    selling:{},
    isLoading:false,
    isLoadingCreate:false,
    isLoadingDelete:false,
    errors:{}
}


export const actFetchAllSelling = createAsyncThunk(
    "selling/fetchSelling",
    async () => {
        const data = await fetchAllDataSelling();
        return data || []
    }
)

export const actFetchSellingById = createAsyncThunk("selling/actFetchSellingById", async (id) => {
    const selling = await fetchDataSellingByID(id);
    return selling || {}
})

export const sellingSlice = createSlice({
    name: 'selling',
    initialState,
    reducers: {
        actUpdateLoadingCreate: (state,action)=>{
            state.isLoadingCreate=action.payload;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(actFetchAllSelling.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(actFetchAllSelling.rejected,(state)=>{
            state.errors={
                errors:"Đã xảy ra lỗi gọi API",
                code:""
            };
            state.isLoading=false
        })
        builder.addCase(actFetchAllSelling.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.allSelling = action.payload || []
        });

        builder.addCase(actFetchSellingById.fulfilled,(state, action) => {
            state.isLoading = false;
            state.selling = action.payload || {}
        })
    }
});
export const actCreateSelling = (selling)=> async (dispatch)=>{
  
    try {
        const payload = {
            ...selling,
            createAt: new Date().getTime()
        }
        dispatch(actUpdateLoadingCreate(true));//Update status loading
        await fetchCreateSelling(payload)
        await dispatch(actFetchAllSelling())// call API get all selling
    } catch (error) {
        console.log(error);
    }finally{
        dispatch(actUpdateLoadingCreate(false));// Update status loading when call API success
    }
}
export const actDeleteSelling = (id)=> async (dispatch)=>{
    try {
       await deleteSellingByID(id)
       await dispatch(actFetchAllSelling())// call API get all selling
    } catch (error) {
        console.log(error);
    }finally{
        dispatch(actUpdateLoadingCreate(false));// Update status loading when call API success
    }
}
export const actUpdateSelling = (id,payload)=> async (dispatch)=>{
  
    try {
        dispatch(actUpdateLoadingCreate(true));
        await fetchUpdateSellingById(id,payload)
        await dispatch(actFetchAllSelling())// call API get all selling
    } catch (error) {
        console.log(error);
    }finally{
        dispatch(actUpdateLoadingCreate(false));// Update status loading when call API success
    }
}
export const { actUpdateLoadingCreate } = sellingSlice.actions;

export default sellingSlice.reducer;