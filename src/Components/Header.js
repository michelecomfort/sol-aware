import React from 'react'
import '../Styles/Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='nav-bar'>
                    <li className='nav-item'>home</li>
                    <li className='nav-item'>uv guide</li>
                    <li className='nav-item'>skin types</li>
                </ul>
            </nav>
            <img src={require('../assets/sol-aware-title.png')} className='title-logo'/>
            <p className='empower-text'>empowering you to care for the health of your skin</p>
        </header>
    )
}

export default Header