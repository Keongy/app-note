import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './displayNote.css'

const DisplayNote = () => {
    const param = useParams()
    const notes = useSelector(state => state.note)
    const [note, setNote] = useState({})

    useEffect(() => {
        const index = notes.findIndex(obj => obj.id === param.id)
        const tmp = { ...notes[index] }
        setNote(tmp)
    }, [notes, param,])


    return (
        <div className='container'>
            <div className="display-title">
                <h1>{note.title}</h1>
            </div>
            <div className="display-subtitle">
                <h2>{note.subtitle}</h2>
            </div>
            <div className="display-body">
                <p>{note.message}</p>
            </div>
        </div>
    );
};

export default DisplayNote;