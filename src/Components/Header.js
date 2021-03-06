import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

const Header = () => {
    return (
        <header className='header' data-cy='header'>
            <Link to='/'><img src={require('../assets/sol-aware-heading.png')} alt='Sol Aware Logo heading' className='title-logo' data-cy='logo'/></Link>
            <nav className='nav-bar' data-cy='nav-bar'>  
                    <Link to='/' className='nav-item home' data-cy='nav-link'>home</Link>
                    <Link to='/uvGuide' className='nav-item uv' data-cy='nav-link'>uv guide</Link>
                    <Link to='/skinTypes' className='nav-item skin-type' data-cy='nav-link'>skin types</Link>
            </nav>
            
        </header>
    )
}

export default Header