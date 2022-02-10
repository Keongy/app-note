import React from 'react';
import { useNavigate } from 'react-router-dom';
import Note from '../note';
import './sideNote.css'

const SideNote = () => {
    const navigate = useNavigate()
    return (
        <div className="side-note">
            <div className='side-note-title'>
                <h1>Mes Notes</h1>
            </div>
            <div className="side-note-body">
                <input type="text" placeholder='Rechercher' />
                <ul>
                    <li onClick={() => navigate('/note/id')}>
                        <Note />
                    </li>
                    <li>
                        <Note />
                    </li>
                    <li>
                        <Note />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNote;