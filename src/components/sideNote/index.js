import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Note from '../note';
import './sideNote.css'

const SideNote = () => {
    const { note } = useSelector(state => state)
    const [notesList, setNotesList] = useState(note)
    const [selected, setSelected] = useState('')


    useEffect(() => {
        setNotesList(note)
    }, [note])

    const handleFilter = e => {
        const stateCopy = [...note]
        const search = stateCopy.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))

        setNotesList(search)
    }

    const handleClick = (props) => {
        setSelected(props)
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
                        return <li
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                        >
                            <Note
                                title={item.title}
                                subtitle={item.subtitle}
                                uid={item.id}
                                selected={selected}
                            />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SideNote;