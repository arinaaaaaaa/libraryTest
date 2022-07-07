
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setCategory, setSorted } from "../redux/slices/filterSlice";
import { setArray, setCounter } from "../redux/slices/booksListSlice";
import axios from 'axios';
import "../styles/SearchBox.css";

export default function SearchBox() {

    const dispatch = useDispatch()
    const requestParams = {
        searchString: useSelector((state) => state.filter.searchString),
        category: useSelector((state) => state.filter.category),
        sorted: useSelector((state) => state.filter.sorting)
    }

    function BooksRequest() {
        axios('https://www.googleapis.com/books/v1/volumes', { params: 
            { 
                q: requestParams.searchString,
                subject: requestParams.category,
                orderBy: requestParams.sorted,
                key: 'AIzaSyBYmtF1e6PsQJ7IdcYCu3gveZrzvBTx5u0'
            } },
            { withCredentials: true }
        ).then((response) => { 
            dispatch(setArray(response.data.items));
            dispatch(setCounter(response.data.totalItems))
        })
    }

    return (
        <div className="searchBoxWrapper">
            <span className="inputField">
                <input type="text" placeholder="Я ищу..." onInput={(event) => dispatch(setSearchValue(event.target.value))}/>
                <button onClick={() => BooksRequest()}>Найти</button>
            </span>
            <div className="selector">
                <p className="selectorTitle">Категории</p>
                <select onChange={(event) => dispatch(setCategory(event.target.value))}>
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
                <select onChange={(event) => dispatch(setSorted(event.target.value))}>
                    <option value="relevance">По релевантности</option>
                    <option value="newest">По новизне</option>
                </select>
            </div>
            <p className="found">Найденных книг: <span style={{color: '#ff6600'}}>{useSelector((state) => state.books.booksCounter)}</span></p>
        </div>
    )
}