import React, { useState, useEffect }  from 'react'
import axios from 'axios';
import './RecipeComponent.scss'

function RecipeComponent({recipe_number}) {
    const [post, setPosts] = useState([])
    const [filteredData, setFilteredData] = useState([]);
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
    useEffect(() => {
        const filteredData = post.filter(data => data.id === recipe_number);
        setFilteredData(filteredData);
    }, [post, recipe_number])

    return (
    <div className='recipeComponent'>
        {filteredData.map(data => (
            <div key={data.id}>{data.name}</div>
        ))}
        {filteredData.map(data => (
            <div key={data.id}>{data.description}</div>
        ))}
    </div>
    )
}

export default RecipeComponent
