import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

const Header = () => {
    return (
        <header className='header' data-cy='header'>
            <img src={require('../assets/sol-aware-heading.png')}className='title-logo' data-cy='logo'/>
            <nav>
                <ul className='nav-bar' data-cy='nav-bar'>
                    <Link to='/' className='nav-item home' data-cy='nav-link'>home</Link>
                    <Link to='/uvGuide' className='nav-item uv' data-cy='nav-link'>uv guide</Link>
                    <Link to='/skinTypes' className='nav-item skin-type' data-cy='nav-link'>skin types</Link>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header