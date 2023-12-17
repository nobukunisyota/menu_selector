import React from 'react'
import './LeftBar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import SyncIcon from '@mui/icons-material/Sync';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ShuffleIcon from '@mui/icons-material/Shuffle';

function LeftBar() {
    return (
    <div>
        <div className='leftBar'>
            <div className='leftBarHeader'>
                <MenuIcon />
                <input type="text" placeholder='検索'/>
            </div>
            <div className='menuList'>
                <div className='addMenu'>
                    <AddIcon />
                    <span>追加</span>
                </div>
                <div className='homeMenu'>
                    <HomeIcon />
                    <span>ホーム</span>
                </div>
                <div className='selectMenu'>
                    <ShuffleIcon />
                    <span>選択</span>
                </div>
            </div>
            <div className='leftBarFooter'>
                <SyncIcon />
                <HelpIcon />
                <SettingsIcon />
            </div>
        </div>
    </div>
    )
}

export default LeftBar
