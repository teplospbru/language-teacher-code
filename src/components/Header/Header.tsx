import React from 'react';
import './Header.scss';
import '../../assets/svg/logo.svg';
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header className='header' id='#header'>
            <div className='header__container'>
                <Link to="/" href="/" className='icon' onClick={ () => navigate('/') }>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#logo"></use>
                    </svg>
                </Link>
                <ul className='header__navigation'>
                    <li><Link to="about" href="about" smooth duration={300}>Обо мне</Link></li>
                    <li><Link to="for-teacher" href="for-teacher" smooth duration={400}>Учителям</Link></li>
                    <li><Link to="for-parent" href="for-parent" smooth duration={500}>Родителям</Link></li>
                    <li><Link to="/quest" href="/quest" onClick={ () => navigate('/quest') }>Проверь себя</Link></li>
                </ul>
            </div>
        </header>
    )
}