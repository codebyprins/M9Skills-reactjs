import React from 'react';
import './Book.css';

function Book(props) {
    return (
        <div>
            <li className="book">
                <div className="title">{props.title} </div>
                <div className="author">{props.title}</div>
            </li>
        </div>
    )
}

export default Book
