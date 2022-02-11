import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Note from '../note';
import './sideNote.css'

const SideNote = () => {
    const navigate = useNavigate()
    const notes = useSelector(state => state.note)



    return (
        <div className="side-note">
            <div className='side-note-title'>
                <h1>Mes Notes</h1>
            </div>
            <div className="side-note-body">
                <input type="text" placeholder='Rechercher' />
                <ul>
                    {notes.map(item => {
                        return <li key={item.id} onClick={() => navigate(`/note/${item.id}`)}>
                            <Note
                                title={item.title}
                                subtitle={item.subtitle}
                                id={item.id}
                            />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SideNote;