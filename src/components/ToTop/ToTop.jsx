import React from 'react';
import './ToTop.scss';

const ToTop = () => {
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

export default ToTop;