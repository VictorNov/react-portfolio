import React from 'react';
import { NavLink } from 'react-router-dom';

import './Page404.scss';

const Page404 = () => {
    return (
        <main className="page404__section">
            <h2 className="page404__title">Something went wrong</h2>
            <p className="page404__text">Whooops... page not found</p>
            <NavLink
                className='page404__link'
                to="/"
                aria-label="Go to home page"
            >
                Go to home page
            </NavLink>
        </main>
    );
};

export default Page404;