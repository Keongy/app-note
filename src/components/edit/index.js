import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './edit.css'

const Edit = () => {
    const initialNote = {
        title: '',
        subtitle: '',
        message: '',
        id: ''
    }
    const [newNote, setNewNote] = useState(initialNote)
    const dispatch = useDispatch()
    const param = useParams()
    const { note } = useSelector(state => state)
    const navigate = useNavigate()

    useEffect(() => {
        setNewNote(initialNote)
        if (param.id) {
            const index = [...note].findIndex(obj => obj.id === param.id)
            if (index !== -1) {
                const notes = note[index]
                setNewNote(notes)
            } else {
                navigate('/')
            }
        }
    }, [param])


    const handleChange = (e, input) => {
        switch (input) {
            case 'title':
                const title = { ...newNote }
                title.title = e.target.value
                setNewNote(title)
                break;
            case 'subtitle':
                const subtitle = { ...newNote }
                subtitle.subtitle = e.target.value
                setNewNote(subtitle)
                break;
            case 'message':
                const message = { ...newNote }
                message.message = e.target.value
                setNewNote(message)
                break;

            default:
                break;
        }
    }


    const submitNote = (e) => {
        e.preventDefault()

        if (newNote.title === '' || newNote.subtitle === '' || newNote.message === '') {
            alert("Champs vides !")
            return
        }

        if (param.id) {
            const index = [...note].findIndex(obj => obj.id === param.id)
            dispatch({
                type: 'UPDATENOTE',
                payload: newNote,
                index: index
            })
            navigate('/')
        } else {
            dispatch({
                type: 'ADDNOTE',
                payload: newNote
            })
            setNewNote(initialNote)
            navigate('/')
        }
    }

    return (
        <div className='container'>
            <div className="edit">
                <div className="edit-title">
                    <h1>Votre plume</h1>
                </div>
                <form onSubmit={submitNote}>
                    <div className="edit-form">
                        <label htmlFor="title">Le Titre</label>
                        <input type="text" placeholder='Titre...' value={newNote.title} onChange={(e) => handleChange(e, 'title')} />
                    </div>
                    <div className="edit-form">
                        <label htmlFor="title">Sous titre</label>
                        <input type="text" placeholder='Sous titre...' value={newNote.subtitle} onChange={(e) => handleChange(e, 'subtitle')} />
                    </div>
                    <div className="edit-form">
                        <label htmlFor="title">Votre texte</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Votre texte...' value={newNote.message} onChange={(e) => handleChange(e, 'message')}></textarea>
                    </div>
                    <button>Enregistrer</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;