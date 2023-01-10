import React from 'react';
import './Header.scss';
import '../../assets/svg/logo.svg';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='icon'>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#logo"></use>
                    </svg>
                </div>
                <ul className='header__navigation'>
                    <li><a href="#">Обо мне</a></li>
                    <li><a href="#">Учителям</a></li>
                    <li><a href="#">Родителям</a></li>
                    <li><a href="#">Проверь себя</a></li>
                </ul>
            </div>
        </header>
    )
}