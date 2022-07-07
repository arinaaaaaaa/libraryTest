
import { useDispatch } from "react-redux";
import { setSearchValue, setCategory } from "../redux/slices/filterSlice";
import "../styles/SearchBox.css";


export default function SearchBox() {

    const dispatch = useDispatch()

    return (
        <div className="searchBoxWrapper">
            <span className="inputField">
                <input type="text" placeholder="Я ищу..." onInput={(event) => dispatch(setSearchValue(event.target.value))}/>
                <button type="submit">Найти</button>
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
                    <option value="poetry">Поэтия</option>
                </select>
            </div>
            <div className="selector">
                <p className="selectorTitle">Отсортировать</p>
                <select onChange={(event) => dispatch(setCategory(event.target.value))}>
                    <option value="relevated">По релевантности</option>
                    <option value="newest">По новизне</option>
                </select>
            </div>
        </div>
    )
}