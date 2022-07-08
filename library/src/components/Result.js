import BookCard from "./universal/BookCard"

import "../styles/ResultSection.css"
import { useEffect } from 'react';


export default function Result(props) {

    useEffect(props.getter, []);

    return (
        <div className="resultSection">
            <div className="booksArray" id="container">
                { props.books?.length != 0 ? props.books?.map((book) =>
                    <BookCard
                        title = { book.volumeInfo.title ? book.volumeInfo.title : null }
                        authors = { book.volumeInfo.authors ? book.volumeInfo.authors : null}
                        category = { book.volumeInfo.categories ? book.volumeInfo.categories : null}
                        description = { book.volumeInfo.description ? book.volumeInfo.description : null}
                        imgPath = { book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://img2.teletype.in/files/5f/5f9672f2-6874-4dba-853e-15847f2826d7.jpeg"}
                    />)
                    :
                    <div className="emptyList">Введите данные для поиска книг</div>
                }
            </div>
            {
                props.books?.length < props.count ? 
                <button className="loadMore" onClick={ () => {
                    props.updater()
                }}>Показать еще</button>
                : null
            }
            <div className="loaderSecion"><div className="loader hide-loader" id="loader"></div></div>
        </div>
    )
}