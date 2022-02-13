import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Note from '../note';
import './sideNote.css'

const SideNote = () => {
    const navigate = useNavigate()
    const notes = useSelector(state => state.note)
    const [notesList, setNotesList] = useState(notes)

    useEffect(() => {
        setNotesList(notes)
    }, [notes])

    const handleFilter = e => {
        const stateCopy = [...notes]
        const search = stateCopy.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))

        setNotesList(search)
    }

    return (
        <div className="side-note">
            <div className='side-note-title'>
                <h1>Mes Notes</h1>
            </div>
            <div className="side-note-body">
                <input type="text" placeholder='Rechercher' onChange={handleFilter} />
                <ul>
                    {notesList.map(item => {
                        return <li key={item.id} >
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