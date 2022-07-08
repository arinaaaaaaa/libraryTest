import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    booksArray: [],
    booksCounter: 0
}

const booksListSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setArray: (state, action) => {
            state.booksArray = action.payload;
        },
        setCounter: (state, action) => {
            state.booksCounter = action.payload;
        },
    }
});

export const { setArray, setCounter } = booksListSlice.actions;

export default booksListSlice.reducer;