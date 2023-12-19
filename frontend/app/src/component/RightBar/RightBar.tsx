import React from 'react'
import './RightBar.scss'
import HistoryComponent from './HistoryComponent'

function RightBar() {
    return (
    <div>
        <div className='rightBarHeader'>
            <h4>閲覧履歴</h4>
            <HistoryComponent/>
        </div>
    </div>
    )
}

export default RightBar
