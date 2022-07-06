import "../styles/SearchBox.css"

function CategoriesSelect() {
    return (
        <div className="selector">
            <p className="selectorTitle">Категории</p>
            <select>
                <option>all</option>
                <option>art</option>
            </select>
        </div>
    )
}

function SortSelect() {
    return (
        <div className="selector">
            <p className="selectorTitle">Отсортировать</p>
            <select>
                <option>relevated</option>
                <option>newest</option>
            </select>
        </div>
    )
}

export default function SearchBox() {
    return (
        <form className="searchBoxWrapper" method="get">
            <span className="inputField">
                <input type="text" placeholder="Я ищу..."/>
                <button type="submit">Найти</button>
            </span>
            <CategoriesSelect/>
            <SortSelect/>
        </form>
    )
}