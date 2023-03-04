import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProductByID, fetchAllDataProduct, fetchCreateProduct, fetchDataProductByID, fetchUpdateProductById } from "../../../apis/productApi";

const initialState = {
    allProducts: [],
    product:{},
    isLoading:false,
    isLoadingCreate:false,
    isLoadingDelete:false,
    errors:{}
}

export const actFetchAllProduct = createAsyncThunk(
    "product/fetchProduct",
    async () => {
        const data = await fetchAllDataProduct();
        console.log('jojojo', data);
        return data || []
    }
)

export const actFetchProductById = createAsyncThunk("product/actFetchProductById", async (id) => {
    const product = await fetchDataProductByID(id);
    return product || {}
})

export const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        actUpdateLoadingCreate: (state,action)=>{
            state.isLoadingCreate=action.payload;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(actFetchAllProduct.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(actFetchAllProduct.rejected,(state)=>{
            state.errors={
                errors:"Đã xảy ra lỗi gọi API",
                code:""
            };
            state.isLoading=false
        })
        builder.addCase(actFetchAllProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.allProducts = action.payload || []
        });

        builder.addCase(actFetchProductById.fulfilled,(state, action) => {
            state.isLoading = false;
            state.product = action.payload || {}
        })
    }
});
export const actCreateProduct = (product)=> async (dispatch)=>{
  
    try {
        dispatch(actUpdateLoadingCreate(true));//Update status loading
        await fetchCreateProduct(product)
        await dispatch(actFetchAllProduct())// call API get all product
    } catch (error) {
        console.log(error);
    }finally{
        dispatch(actUpdateLoadingCreate(false));// Update status loading when call API success
    }
}
export const actDeleteProduct = (id)=> async (dispatch)=>{
    try {
       await deleteProductByID(id)
       await dispatch(actFetchAllProduct())// call API get all product
    } catch (error) {
        console.log(error);
    }finally{
        dispatch(actUpdateLoadingCreate(false));// Update status loading when call API success
    }
}
export const actUpdateProduct = (id,payload)=> async (dispatch)=>{
  
    try {
        dispatch(actUpdateLoadingCreate(true));
        await fetchUpdateProductById(id,payload)
        await dispatch(actFetchAllProduct())// call API get all product
    } catch (error) {
        console.log(error);
    }finally{
        dispatch(actUpdateLoadingCreate(false));// Update status loading when call API success
    }
}
export const { actUpdateLoadingCreate } = productsSlice.actions;

export default productsSlice.reducer;