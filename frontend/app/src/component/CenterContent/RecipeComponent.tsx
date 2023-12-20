import React, { useState, useEffect }  from 'react'
import axios from 'axios';
import './RecipeComponent.scss'

function RecipeComponent() {
    const [post, setPosts] = useState([])
    useEffect(() => {
        axios.get('')
        .then(res => {
            console.log(res.data)
        })
    }, [])
    return (
    <div></div>
    )
}

export default RecipeComponent
