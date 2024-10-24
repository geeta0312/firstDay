import React from 'react'
import useFetch from './useFetch'

function FetchingData() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/posts")

    return (
        <div>{data && data.map((item) => <p key={item.id}>{item.title}</p>)}</div>
    )



}

export default FetchingData
