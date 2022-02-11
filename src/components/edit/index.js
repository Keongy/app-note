import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
        if (newNote.title !== '' && newNote.subtitle !== '' && newNote.message !== '') {
            dispatch({
                type: 'ADDNOTE',
                payload: newNote
            })
            setNewNote(initialNote)
        } else {
            alert("Champs vides !")
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