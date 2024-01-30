import React, { useState, useEffect }  from 'react'
import './HistoryComponent.scss'
import axios from 'axios';
function HistoryComponent() {
    const [post, setPosts] = useState([])
    useEffect(() => {
        const backendApi = process.env.REACT_APP_BACKEND_API;
        if (backendApi) {
            axios.get(backendApi)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [])
    // post.sort();
    console.log(post);
    return (
    <div className='historyComponent'>
        {post.map(data => (
            <div key={data.id}>{data.name}</div>
        ))}
    </div>
    )
}

export default HistoryComponent
