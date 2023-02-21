import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
}

const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state,action) => {
            state.product = [action.payload,...state.product]
        },
        removeProduct:(state,action)=>{
            const RemoveId = action.payload;
            state.product = state.product.filter(product=>product.id !== RemoveId)
        },
        updateProduct:(state,action)=>{
            const updateID = action.payload;
            const productUpdate = state.product.findIndex(product=>product.id === updateID)

            if(productUpdate>=0){
                state.product[productUpdate]=updateID
            }
        }
    }
});
export const { addProduct,removeProduct,updateProduct } = product.actions;

export default product.reducer;