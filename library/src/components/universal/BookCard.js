import "../../styles/ResultSection.css"

export default function BookCard() {
    return (
        <div className="bookCard">
            <img src="https://gl-img.rg.ru/uploads/images/2016/04/19/61c012a02e0e5d8.jpg" alt="" />
            <div className="infoSection">
                <p className="title">Вы, конечно, шутите, мистер Фейнман!</p>
                <p className="author">Ричард Фейнман</p>
                <span className="category">Роман</span>
            </div>
        </div>
    )
}