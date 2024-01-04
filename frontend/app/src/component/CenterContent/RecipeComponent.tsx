import React, { useState, useEffect }  from 'react'
import axios from 'axios';
import './RecipeComponent.scss'

function RecipeComponent() {
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
    return (
    <div>
        <ul>
        {post.map(data => (
            <li key={data.id}>{data.name}</li>
        ))}
        </ul>
    </div>
    )
}

export default RecipeComponent
