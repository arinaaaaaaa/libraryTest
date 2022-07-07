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
            console.log(state.booksArray)
        },
        setCounter: (state, action) => {
            state.booksCounter = action.payload;
            console.log(state.booksCounter)
        },
    }
});

export const { setArray, setCounter } = booksListSlice.actions;

export default booksListSlice.reducer;