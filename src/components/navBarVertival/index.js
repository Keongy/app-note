import React from 'react';
import './navBarVertical.css'
import { AiOutlineFolderOpen, AiOutlineSetting } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';

const NavBarVertical = () => {
    return (
        <div className="nav-vertical">
            <div className="dot">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <ul>
                <li className="icon-folder">
                    <Link to='/'><AiOutlineFolderOpen size="2.5em" /></Link>
                </li>
                <li className="icon-edit">
                    <Link to='/editer'><FiEdit size="2.5em" /></Link>
                </li>
                <li className="icon-setting">
                    <Link to='/reglages'><AiOutlineSetting size="2.5em" /></Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBarVertical;