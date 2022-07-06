import { createAction } from '@reduxjs/toolkit'

export const booksSearcher = createAction('SEARCH_BOOK')

export function searchBooks() {
    return dispatch => {
        dispatch(booksSearcher());
        
    }
}