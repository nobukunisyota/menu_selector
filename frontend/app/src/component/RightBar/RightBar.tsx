import React from 'react'
import './RightBar.scss'
import HistoryComponent from './HistoryComponent'

function RightBar() {
    return (
        <div className='rightBar'>
            <div className='rightBarHeader'>
                <h4>閲覧履歴</h4>
            </div>
            <div className='historyBar'>
                <HistoryComponent/>
            </div>
        </div>
    )
}

export default RightBar
