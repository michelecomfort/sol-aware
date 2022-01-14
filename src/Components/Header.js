import React from 'react'
import '../Styles/Header.css'

const Header = () => {
    return (
        <header className='header'>
            <img src={require('../assets/sol-aware-heading.png')}className='title-logo'/>
            <nav>
                <ul className='nav-bar'>
                    <li className='nav-item home'>home</li>
                    <li className='nav-item'>uv guide</li>
                    <li className='nav-item'>skin types</li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header