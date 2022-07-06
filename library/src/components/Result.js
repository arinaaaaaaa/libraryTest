import BookCard from "./universal/BookCard"
import "../styles/ResultSection.css"

export default function Result() {
    return (
        <div className="resultSection">
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
        </div>
    )
}