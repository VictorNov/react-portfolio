import React from 'react';
import './ToTop.scss';

export const ToTop: React.FC = () => {
    return (
        <button
            className="to-top"
            onClick={() => window.scrollTo(0, 0)}
            type="button"
            title="Go to top"
            aria-label="Go to top"
        >
            <i className="ri-arrow-up-line"/>
        </button>
    );
};