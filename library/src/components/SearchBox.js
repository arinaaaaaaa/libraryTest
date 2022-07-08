
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setCategory, setSorted } from "../redux/slices/filterSlice";
import { setArray, setCounter } from "../redux/slices/booksListSlice";
import BooksRequest from "../common/booksRequest";
import "../styles/SearchBox.css";

export default function SearchBox() {

    const dispatch = useDispatch()

    const requestParams = {
        searchString: useSelector((state) => state.filter.searchString),
        category: useSelector((state) => state.filter.category),
        sorted: useSelector((state) => state.filter.sorting),
        maxResults: useSelector((state) => state.pages.pageNumber * state.pages.pageSize) 
    }

    async function booksRequest() {
        let response = await BooksRequest(requestParams);
        dispatch(setArray(response.data.items));
        dispatch(setCounter(response.data.totalItems));
    }

    function sendOnEnter(event) {
        if (event.keyCode === 13) booksRequest()
    }

    return (
        <div className="searchBoxWrapper">
            <span className="inputField">
                <input type="text" placeholder="Я ищу..." 
                    onInput={(event) => dispatch(setSearchValue(event.target.value))}
                    onKeyDown={ (event) => sendOnEnter(event) }
                />
                <button onClick={() => booksRequest()}>Найти</button>
            </span>
            <div className="selector">
                <p className="selectorTitle">Категории</p>
                <select onChange={
                    (event) => dispatch(setCategory(event.target.value))
                }>
                    <option value="all">Все</option>
                    <option value="art">Искусство</option>
                    <option value="biography">Биографии</option>
                    <option value="computers">Компьютеры</option>
                    <option value="history">История</option>
                    <option value="medical">Медицина</option>
                    <option value="poetry">Поэзия</option>
                </select>
            </div>
            <div className="selector">
                <p className="selectorTitle">Отсортировать</p>
                <select onChange={
                    (event) => dispatch(setSorted(event.target.value))
                }>
                    <option value="relevance">По релевантности</option>
                    <option value="newest">По новизне</option>
                </select>
            </div>
            <p className="found">Найденных книг: <span style={{color: '#ff6600'}}>{useSelector((state) => state.books.booksCounter)}</span></p>
        </div>
    )
}