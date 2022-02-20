import './note.css'
import { TiDelete } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Note = ({ title, subtitle, uid, selected }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [noteSelected, setNoteSelected] = useState('')



    useEffect(() => {
        if (uid === selected) {
            setNoteSelected('note-selected')
        } else {
            setNoteSelected('')
        }
    }, [selected, uid])



    const handleDelete = () => {
        dispatch({
            type: 'DELETENOTE',
            id: uid
        })
    }

    const handleModifyNote = () => {
        navigate(`/editer/${uid}`)
    }

    const handleClick = () => {
        navigate(`/note/${uid}`)
    }

    return (
        <div className={`note ${noteSelected}`}>
            <div className={`note-infos `} onClick={handleClick}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <div className="note-icons">
                <div className="note-icons-delete" onClick={handleDelete}>
                    <TiDelete size="1.8em" color="#dc3545" />
                </div>
                <div className="note-icons-edit" onClick={handleModifyNote}>
                    <FiEdit size="1.3em" color="black" />
                </div>
            </div>
        </div>
    );
};

export default Note;