import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selling: [],
}

const selling = createSlice({
    name: 'selling',
    initialState,
    reducers: {
        addSelling: (state,action) => {
            state.selling = [action.payload,...state.selling]
        },
        removeSelling:(state,action)=>{
            const RemoveId = action.payload;
            state.selling = state.selling.filter(selling=>selling.id !== RemoveId)
        }
    }
});
export const { addSelling,removeSelling } = selling.actions;

export default selling.reducer;