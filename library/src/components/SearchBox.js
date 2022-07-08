
import { useDispatch } from "react-redux";
import { setSearchValue, setCategory, setSorted } from "../redux/slices/filterSlice";
import { clear } from "../redux/slices/booksListSlice";
import "../styles/SearchBox.css";

export default function SearchBox(props) {

    const dispatch = useDispatch();

    function sendOnEnter(event) {
        if (event.keyCode === 13) props.request()
    }

    return (
        <div className="searchBoxWrapper">
            <span className="inputField">
                <input type="text" placeholder="Я ищу..." 
                    onInput={(event) => { 
                        dispatch(setSearchValue(event.target.value));
                            if (event.target.value != "") dispatch(clear)                           
                        }}
                    onKeyDown={ (event) => {
                        event.target.value != "" ?
                            sendOnEnter(event)
                            : dispatch(clear())
                    }}
                />
                <button onClick={props.request}>Найти</button>
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
            <p className="found">Найденных книг: <span style={{color: '#ff6600'}}>{props.count}</span></p>
        </div>
    )
}