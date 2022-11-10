import { createSlice } from "@reduxjs/toolkit";

const leftbarStatus = 'max'

export const leftbarStatusSlice = createSlice({
    name: "leftbarStatusInfo",
    initialState: {value: leftbarStatus },
    reducers: {
        leftbarStatusRed: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { leftbarStatusRed } = leftbarStatusSlice.actions;

export default leftbarStatusSlice.reducer;