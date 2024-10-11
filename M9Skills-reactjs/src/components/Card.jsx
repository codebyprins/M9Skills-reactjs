import React from 'react';
import './Card.css';
import Img from '../assets/images/hog.jpg'

function Card(props) {
    return (
        <div className='card-wrapper'>
            <h2 className='card-title'>{props.name}</h2>
            <div className='card-imgInfo'>
                <img className='card-imgImg' src={Img} alt='https://www.instagram.com/digimadness/'></img>
                <p className='card-imgText'>Piglets huddled together for a nap</p>
            </div>
            <div className='card-text'>
                <p className='card-p'>Location: Natuurpark Lelystad</p>
                <p className='card-p'>Check out <a className='card-a' href=''><i class="fa-brands fa-instagram"></i>DigiMadness</a> on Instagram for more nature photography.</p>
            </div>
        </div>

    )
}

export default Card
