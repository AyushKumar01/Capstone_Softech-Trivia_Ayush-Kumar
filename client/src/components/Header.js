import React from 'react'
import LOgoHit from '../assets/images/logohit.png';

function Header() {
    return (
        <header className="header">
        <div className="header__wrapper">
            <img className="header__logo" src={LOgoHit}  alt="LOgoHit"/>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__list-item"><a className="header__list-link">Home</a></li>
                    <li className="header__list-item"><a className="header__list-link">About</a></li>
                    <li className="header__list-item"><a className="header__list-link">Reviews</a></li>
                </ul>
            </nav>
        </div>
        </header>
    )
}

export default Header
