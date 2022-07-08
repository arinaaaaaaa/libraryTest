import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "../redux/slices/pageSlice";
import { setArray, setCounter } from "../redux/slices/booksListSlice";
import BooksRequest from "../common/booksRequest";
import BookCard from "./universal/BookCard"
import "../styles/ResultSection.css"

export default function Result() {
    const booksArray = useSelector((state) => state.books.booksArray);
    const booksCounter = useSelector((state) => state.books.booksCounter);
    const pageNumber = useSelector((state) => state.pages.pageNumber);
    const pageSize = useSelector((state) => state.pages.pageSize)

    const requestParams = {
        searchString: useSelector((state) => state.filter.searchString),
        category: useSelector((state) => state.filter.category),
        sorted: useSelector((state) => state.filter.sorting),
        maxResults: useSelector((state) => state.pages.pageNumber * state.pages.pageSize) 
    }

    function booksRequest() {
        BooksRequest(requestParams).then((response) => {
            dispatch(setArray(response.items));
            dispatch(setCounter(response.totalItems));
        })
    }

    const dispatch = useDispatch()

    return (
        <div className="resultSection">
            <div className="booksArray" id="booksArray">
                { booksArray && booksArray.length != 0 ? booksArray.map((book) =>
                    <BookCard
                        title = { book.volumeInfo.title ? book.volumeInfo.title : null }
                        authors = { book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : null}
                        category = { book.volumeInfo.categories ? book.volumeInfo.categories[0] : null}
                        imgPath = { book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://img2.teletype.in/files/5f/5f9672f2-6874-4dba-853e-15847f2826d7.jpeg"}
                    />)
                :
                    <p className="emptyList">Введите данные для поиска книг</p>
                }
            </div>
            {
                booksCounter >= pageSize * pageNumber ? 
                <button className="loadMore" onClick={ () => {
                    dispatch(setPageNumber(pageNumber + 1));
                    booksRequest()
                }}>Показать еще</button>
                : null
            }
            <div className="loaderSecion"><div class="loader hide-loader" id="loader"></div></div>
        </div>
    )
}