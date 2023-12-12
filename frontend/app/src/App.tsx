import React from 'react';
import './App.scss';
import LeftBar from './component/LeftBar/LeftBar';
import CenterContent from './component/CenterContent/CenterContent';
import RightBar from './component/RightBar/RightBar';

function App() {
    return (
    <div className="App">
        {/* Left Component */}
        <LeftBar />
        {/* Center Component */}
        <CenterContent />
        {/* Right Component */}
        <RightBar />
        {/* Right Component */}
    </div>
    );
}

export default App;
