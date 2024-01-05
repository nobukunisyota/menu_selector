import React, { useState, useEffect }  from 'react'
import axios from 'axios';
import './CenterContent.scss'
import RecipeComponent from './RecipeComponent'

function CenterContent() {
    const [data, setData] = useState([]);
    const [selectedColumn, setSelectedColumn] = useState('');
    const [recipeNumberList, setRecipeNumberList] = useState([]);
    useEffect(() => {
        const backendApi = process.env.REACT_APP_BACKEND_API;
        axios.get(backendApi)
            .then(response => {
            setData(response.data);
            if (response.data.length > 0) {
                setSelectedColumn(Object.keys(response.data[0])[0]);
            }
            })
            .catch(error => {
            console.error('Error fetching data:', error);
            });
        }, []);

    useEffect(() => {
        const recipeNumberList = data.map(item => item[selectedColumn]);
        setRecipeNumberList(recipeNumberList);
    }, [selectedColumn, data]);
    return (
    <div className='CenterComponent'>
        <div className='recipeComponent'>
            {recipeNumberList.map(num => (
                <RecipeComponent recipe_number={num}/>
            ))}
        </div>
        <div className='allView'>
            <button>AllView</button>
        </div>
    </div>
    )
}

export default CenterContent
