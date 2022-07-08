import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    title: "",
    authors: [],
    categories: [],
    description: "",
    imgPath: ""
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBook: (state, action) => {
            state.title = action.payload.title;
            state.authors = action.payload.authors;
            state.categories = action.payload.categories;
            state.description = action.payload.description;
            state.imgPath = action.payload.imgPath;
        }
    }
});


export const { setBook } = bookSlice.actions;

export default bookSlice.reducer;