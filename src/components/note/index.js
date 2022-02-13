import './note.css'
import { TiDelete } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Note = ({ title, subtitle, id }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleDelete = () => {
        dispatch({
            type: 'DELETENOTE',
            id: id
        })
    }

    const handleModifyNote = () => {
        navigate(`/editer/${id}`)
    }

    return (
        <div className='note'>
            <div className="note-infos" onClick={() => navigate(`/note/${id}`)}>
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