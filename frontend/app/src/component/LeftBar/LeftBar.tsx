import React from 'react'
import MenuComponent from './MenuComponent';
import './LeftBar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import SyncIcon from '@mui/icons-material/Sync';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';

function LeftBar() {
    return (
    <div>
        <div className='leftBar'>
            <div className='leftBarHeader'>
                <MenuIcon />
            </div>
            <div className='menuLists'>
                <div className='menuList'>
                    <MenuComponent />
                    <MenuComponent />
                    <MenuComponent />
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
