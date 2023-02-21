import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admins: [],
}

const admins = createSlice({
    name: 'admins',
    initialState,
    reducers: {
        addAdmin: (state,action) => {
            state.admins = [action.payload,...state.admins]
        },
        removeAdmin:(state,action)=>{
            const RemoveId = action.payload;
            state.admins = state.admins.filter(admins=>admins.id !== RemoveId)
        }
    }
});
export const { addAdmin,removeAdmin } = admins.actions;

export default admins.reducer;