import { useDispatch, useSelector } from "react-redux"
import { setBook } from "../../redux/slices/bookSlice"
import { setPageState } from "../../redux/slices/pageSlice"
import "../../styles/ResultSection.css"

export default function BookCard(props) {
    const dispatch = useDispatch()

    const bookInfo = {
        title: props.title,
        authors: props.authors,
        categories: props.category,
        description: props.description,
        imgPath: props.imgPath
    }

    function setBookItem() {
        dispatch(setBook(bookInfo))
        dispatch(setPageState(2))
    }

    return (
        <div className="bookCard" onClick = {() => setBookItem()}>
            <img src={props.imgPath} alt="" />
            <div className="infoSection">
                {props.title ?
                    <p className="title">{props.title}</p>
                : null}
                {props.authors ?
                    <p className="author">{props.authors.join(', ') }</p>
                : null }
                {props.category ?
                    <span className="category">{props.category[0]}</span>
                : null }
            </div>
        </div>
    )
}