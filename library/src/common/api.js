import axios from 'axios';

export default async function booksGET(requestParams) {
    var requestResponse = []
    document.getElementById("container").classList.add("blocked")
    document.getElementById("loader").classList.remove("hide-loader")

    requestResponse = await axios('https://www.googleapis.com/books/v1/volumes', { params: 
        {
            q: requestParams.category == 'all' ? 
                requestParams.searchString
                    : 
                `${requestParams.searchString}+subject:${requestParams.category}`,
            orderBy: requestParams.sorted,
            startIndex: requestParams.index,
            maxResults: requestParams.maxResults,
            key: 'AIzaSyBYmtF1e6PsQJ7IdcYCu3gveZrzvBTx5u0'
        } },
        { withCredentials: true }
    )
    document.getElementById("loader").classList.add("hide-loader")
    document.getElementById("container").classList.remove("blocked")
    return requestResponse
}
