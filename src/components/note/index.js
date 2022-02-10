import React from 'react';
import './note.css'
import { TiDelete } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";

const Note = () => {
    return (
        <div className='note'>
            <div className="note-infos">
                <h2>Cuisine</h2>
                <p>Préparer un macchiato</p>
            </div>
            <div className="note-icons">
                <div className="note-icons-delete">
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