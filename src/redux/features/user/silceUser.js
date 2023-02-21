import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state,action) => {
            state.users = [action.payload,...state.users]
        },
        removeUser:(state,action)=>{
            const RemoveId = action.payload;
            state.users = state.users.filter(users=>users.id !== RemoveId)
        }
    }
});
export const { addUser,removeUser } = users.actions;

export default users.reducer;