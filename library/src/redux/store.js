import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import booksReducer from "./slices/booksListSlice";
import pagesReducer from "./slices/pageSlice";
import bookReducer from "./slices/bookSlice"

export default configureStore ({
    reducer: {
        filter: filterReducer,
        books: booksReducer,
        pages: pagesReducer,
        book: bookReducer
    }
})