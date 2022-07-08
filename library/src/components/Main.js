import { useSelector, useDispatch } from "react-redux";

import booksGET from "../common/api";
import Result from "./Result";
import BookPage from "./universal/BookPage";
import SearchBox from "./SearchBox";

import { setArray, setCounter } from "../redux/slices/booksListSlice";
import { setPageState } from "../redux/slices/pageSlice";



export default function MainWindow() {
    const collection_books = useSelector((state) => state.books);
    const single_book = useSelector((state) => state.book);

    const dispatch = useDispatch();

    const requestParams = {
        searchString: useSelector((state) => state.filter.searchString),
        category: useSelector((state) => state.filter.category),
        sorted: useSelector((state) => state.filter.sorting),
        index: collection_books.booksArray ? collection_books.booksArray.length : 0,
        maxResults: useSelector((state) => state.pages.pageNumber * state.pages.pageSize) 
    }

    function booksRequest() {
        requestParams.searchString &&
        booksGET(requestParams)
        .then((response) => {
            console.log(response)
            dispatch(setArray(response.data.items));
            dispatch(setCounter(response.data.totalItems));
        })
        .catch((error) => {
            alert('Ошибка обращения к серверу, страница не найдена')
        });
    }

    function updateArray() {
        requestParams.searchString &&
        booksGET(requestParams)
        .then((response) => {
            console.log(collection_books.booksArray + response.data.items)
            dispatch(setArray(collection_books.booksArray.concat(response.data.items)));
        })
        .catch((error) => {
            alert('Ошибка обращения к серверу, страница не найдена')
        });
    }

    return (
        <div className="contentContainer">
          <SearchBox count={collection_books?.booksCounter} request={booksRequest}/>
          { 
            useSelector((state) => state.pages.pageState) == 1 ? 
                <Result getter={booksRequest} updater={updateArray} books={collection_books.booksArray} count={collection_books.booksCounter} /> 
                    : 
                <BookPage bookInfo={single_book}/>
        }
        </div>
    )
}