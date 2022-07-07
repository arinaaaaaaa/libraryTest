import { useSelector } from "react-redux";
import BookCard from "./universal/BookCard"
import "../styles/ResultSection.css"

export default function Result() {
    const booksArray = useSelector((state) => state.books.booksArray)
    console.log(booksArray)

    return (
        <div className="resultSection">
            { booksArray.map((book) =>
                <BookCard
                    title = { book.volumeInfo.title ? book.volumeInfo.title : "No title" }
                    authors = { book.volumeInfo.authors ? book.volumeInfo.authors.join(' ') : "No authors"}
                    category = { book.volumeInfo.categories ? book.volumeInfo.categories[0] : "No categories"}
                    imgPath = { book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "https://img2.teletype.in/files/5f/5f9672f2-6874-4dba-853e-15847f2826d7.jpeg"}
                />
            )
            }
        </div>
    )
}