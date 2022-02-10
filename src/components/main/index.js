import React from 'react';
import Card from '../card';
import './main.css'

const Main = () => {
    return (
        <div className='container'>
            <div className="main-title">
                <h1>Vos notes</h1>
            </div>
            <div className="main-body">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Main;