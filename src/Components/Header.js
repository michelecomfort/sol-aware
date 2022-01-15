import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

const Header = () => {
    return (
        <header className='header'>
            <img src={require('../assets/sol-aware-heading.png')}className='title-logo'/>
            <nav>
                <ul className='nav-bar'>
                    <Link to='/' className='nav-item home'>home</Link>
                    <li className='nav-item'>uv guide</li>
                    <li className='nav-item'>skin types</li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header