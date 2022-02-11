import './note.css'
import { TiDelete } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from 'react-redux';

const Note = ({ title, subtitle, id }) => {

    const dispatch = useDispatch()


    const handleDelete = () => {
        console.log('Note: delete')
        dispatch({
            type: 'DELETENOTE',
            id: id
        })
    }

    return (
        <div className='note'>
            <div className="note-infos">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <div className="note-icons">
                <div className="note-icons-delete" onClick={handleDelete}>
                    <TiDelete size="1.8em" color="#dc3545" />
                </div>
                <div className="note-icons-edit">
                    <FiEdit size="1.3em" color="black" />
                </div>
            </div>
        </div>
    );
};

export default Note;