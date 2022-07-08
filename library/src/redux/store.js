import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import booksReducer from "./slices/booksListSlice";
import pagesReducer from "./slices/pageSlice"

export default configureStore ({
    reducer: {
        filter: filterReducer,
        books: booksReducer,
        pages: pagesReducer
    }
})