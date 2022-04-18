import React from 'react';
import NotFoundPages from '../NotFoundPages/NotFoundPages.jsx';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='page-error mt-5'>
            <h1 className='text-center text'> Ops Page Not Found 404 !!!</h1>
           <NotFoundPages></NotFoundPages>
        </div>
    );
};

export default NotFound;