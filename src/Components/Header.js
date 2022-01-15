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
                    <Link to='/uvGuide' className='nav-item'>uv guide</Link>
                    <Link to='/skinTypes' className='nav-item'>skin types</Link>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header