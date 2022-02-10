import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }, [])

    return (
        <div className='container'>
            <h1>Page not found !!!</h1>
            <p>You will be redirect in few seconds ...</p>
        </div>
    );
};

export default Error;