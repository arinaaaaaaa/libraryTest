import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    searchString: "hello",
    sorting: "relevated",
    category: "all"
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchString = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setSorted: (state, action) => {
            state.sorting = action.payload;
        }
    }
});

export const { setSearchValue, setCategory } = filterSlice.actions;

export default filterSlice.reducer;