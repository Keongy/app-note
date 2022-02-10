import React from 'react';
import './navBarVertical.css'
import { AiOutlineFolderOpen, AiOutlineSetting } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const NavBarVertical = () => {
    const navigate = useNavigate()
    return (
        <div className="nav-vertical">
            <div className="dot">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="icon-folder" onClick={() => navigate('/')}>
                <AiOutlineFolderOpen size="2.5em" />
            </div>
            <div className="icon-edit" onClick={() => navigate('/editer')}>
                <FiEdit size="2.5em" />
            </div>
            <div className="icon-setting" onClick={() => navigate('/reglage')}>
                <AiOutlineSetting size="2.5em" />
            </div>
        </div>
    );
};

export default NavBarVertical;