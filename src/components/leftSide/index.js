import React from 'react';
import NavBarVertical from '../navBarVertival';
import SideNote from '../sideNote';
import './leftSide.css'


const LeftSide = () => {
    return (
        <div className="container-left">
            <NavBarVertical />
            <SideNote />
        </div>
    );
};

export default LeftSide;