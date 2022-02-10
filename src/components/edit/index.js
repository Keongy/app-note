import React from 'react';
import './edit.css'

const Edit = () => {
    return (
        <div className='container'>
            <div className="edit">
                <div className="edit-title">
                    <h1>Votre plume</h1>
                </div>
                <form>
                    <div className="edit-form">
                        <label htmlFor="title">Le Titre</label>
                        <input type="text" placeholder='Titre...' />
                    </div>
                    <div className="edit-form">
                        <label htmlFor="title">Sous titre</label>
                        <input type="text" placeholder='Sous titre...' />
                    </div>
                    <div className="edit-form">
                        <label htmlFor="title">Votre texte</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Votre texte...'></textarea>
                    </div>
                    <button>Enregistrer</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;