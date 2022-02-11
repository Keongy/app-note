import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card';
import './main.css'

const Main = () => {
    const notes = useSelector(state => state.note)
    return (
        <div className='container'>
            <div className="main-title">
                <h1>Vos notes</h1>
            </div>
            <div className="main-body">
                {notes.length ?
                    notes.map((note, index) => {
                        return <Card
                            key={index}
                            title={note.title}
                            subtitle={note.subtitle}
                            id={note.id}
                        />

                    })
                    :
                    <h1>Vous n'avez aucune note !</h1>
                }

            </div>
        </div>
    );
};

export default Main;