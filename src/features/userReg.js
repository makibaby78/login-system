import { createSlice } from "@reduxjs/toolkit";

const userReg = []

export const userRegSlice = createSlice({
    name: "user",
    initialState: {value: userReg },
    reducers: {
        userRegInfo: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { userRegInfo } = userRegSlice.actions;

export default userRegSlice.reducer;