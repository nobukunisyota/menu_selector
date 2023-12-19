import React from 'react'
import './CenterContent.scss'
import RecipeComponent from './RecipeComponent'

function CenterContent() {
    return (
    <div className='CenterComponent'>
        <div className='recipeComponent'>
            <RecipeComponent/>
        </div>
        <div className='allView'>
            <button>AllView</button>
        </div>
    </div>
    )
}

export default CenterContent
