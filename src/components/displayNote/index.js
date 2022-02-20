import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './displayNote.css'

const DisplayNote = () => {
    const { note } = useSelector(state => state)
    const [userNote, setUserNote] = useState({})
    const { id } = useParams()
    const dispatch = useDispatch()


    dispatch({
        type: 'URL',
        payload: id
    })

    useEffect(() => {
        const index = note.findIndex(obj => obj.id === id)
        const tmp = { ...note[index] }
        setUserNote(tmp)
    }, [note, id])

    return (
        <div className='container'>
            <div className="display-title">
                <h1>{userNote.title}</h1>
            </div>
            <div className="display-subtitle">
                <h2>{userNote.subtitle}</h2>
            </div>
            <div className="display-body">
                <p>{userNote.message}</p>
            </div>
        </div>
    );
};

export default DisplayNote;