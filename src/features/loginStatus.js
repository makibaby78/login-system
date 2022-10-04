import { createSlice } from "@reduxjs/toolkit";

const loginStatus = false

export const loginStatSlice = createSlice({
    name: "loginStatInfo",
    initialState: {value: loginStatus },
    reducers: {
        loginStatRed: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { loginStatRed } = loginStatSlice.actions;

export default loginStatSlice.reducer;