import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import booksReducer from "./slices/booksListSlice";

export default configureStore ({
    reducer: {
        filter: filterReducer,
        books: booksReducer
    }
})