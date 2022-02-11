import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css'

const Card = ({ title, subtitle, id }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/note/${id}`)
    }

    return (
        <div className="main-card" onClick={handleClick}>
            <div className="main-card-title">
                <h2>{title}</h2>
            </div>
            <div className="main-card-subtitle">
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default Card;