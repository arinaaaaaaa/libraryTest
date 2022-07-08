import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    pageSize: 30,
    pageNumber: 1
}

const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
    }
});

export const { setPageNumber } = pagesSlice.actions;

export default pagesSlice.reducer;