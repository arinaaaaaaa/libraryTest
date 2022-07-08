import "../../styles/ResultSection.css"

export default function BookCard(props) {
    return (
        <div className="bookCard">
            <img src={props.imgPath} alt="" />
            <div className="infoSection">
                {props.title ?
                    <p className="title">{props.title}</p>
                : null}
                {props.authors ?
                    <p className="author">{props.authors}</p>
                : null }
                {props.category ?
                    <span className="category">{props.category}</span>
                : null }
            </div>
        </div>
    )
}