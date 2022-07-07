import "../../styles/ResultSection.css"

export default function BookCard(props) {
    return (
        <div className="bookCard">
            <img src={props.imgPath} alt="" />
            <div className="infoSection">
                <p className="title">{props.title}</p>
                <p className="author">{props.authors}</p>
                <span className="category">{props.category}</span>
            </div>
        </div>
    )
}