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
        clear: (state) => {
            state.booksArray = [];
            state.booksCounter = 0;
        }
    }
});

export const { setArray, setCounter, clear } = booksListSlice.actions;

export default booksListSlice.reducer;