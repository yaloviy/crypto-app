// @flow
import * as React from 'react';
import { useNavigate } from 'react-router-dom';



import './style.css'

const links = [
    {
        title: 'Home',
        to: '/'
    },
    {
        title: 'About',
        to: '/about'
    },
    {
        title: 'Settings',
        to: '/settings'
    },
    {
        title: 'Profile',
        to: '/profile'
    },
]

export const Header = () => {
    return (
        <header>
            <ul className='header__list'>
                {links.map((link, index) => (<li key={index} className='header__item'><span >{link.title}</span></li>))}
            </ul>
        </header>
    );
};

export default Header