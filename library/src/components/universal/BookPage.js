import { useDispatch, useSelector } from 'react-redux'
import { setPageState } from '../../redux/slices/pageSlice'
import '../../styles/BookPage.css'

export default function BookPage(props) {

    const dispatch = useDispatch();

    return props.bookInfo ? (
        <>
        <div className="bookPage" id="container">
            <div className="bookPageWrapper">
                <div className="bookImg"><img src={props.bookInfo.imgPath} alt="" /></div>
                <div className="bookInfoSection">
                    <p className="title">{props.bookInfo.title}</p>
                    <p className="authors">{props.bookInfo.authors?.join(', ')}</p>
                    <span className="categoriesList">
                        {props.bookInfo.categories?.map((categoryItem) =>
                            <span className="category">{categoryItem}</span>
                        )}
                    </span>
                    <p className="description">{props.bookInfo.description}</p>
                </div>
            </div>
            <button className="back" onClick = {() => dispatch(setPageState(1))}>Вернуться назад</button>
        </div>
        <div className="loaderSecion"><div className="loader hide-loader" id="loader"></div></div>
        </>
    ) : null
}