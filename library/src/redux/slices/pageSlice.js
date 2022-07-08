import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    pageState: 1,
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
        setPageState: (state, action) => {
            state.pageState = action.payload;
        }
    }
});

export const { setPageNumber, setPageState } = pagesSlice.actions;

export default pagesSlice.reducer;