import React, { useState } from 'react'
import '../Styles/ZipInput.css'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

const ZipInput = ({ addZipcode}) => {

    const [zip, setZip] = useState('')
    
    const sendZip = (e) => {
        setZip(e)
        addZipcode(e) 
    }

    return (
        <form className='zipcode-form' data-cy='zipcode-form'>
            <div className='input-section'>
                <h2 className='slogan' data-cy='sub-heading'>skin health starts with sun knowledge</h2>
                <div className='input-button'>
                    <label className='zipcode'>
                        <input className='zipcode-input' placeholder='Zip Code' data-cy='zip-input' onChange={(e) => sendZip(e.target.value)} />
                    </label>
                    <Link to='/datadisplay' className='go-button' data-cy='go-button'>Go</Link>
                </div>
            </div>
            
            <aside className='small-grid' data-cy='small-grid'>
                <div className='small-info-section' data-cy='small-info-section'>
                    <p className='small-text'>The health of our skin starts with decisions we make everyday</p>
                    <img src={require('../assets/sunflower-woman.jpeg')} alt='Woman in a field of sunflowers'className='home-image'/>
                </div>
                <div className='small-info-section' data-cy='small-info-section'>
                    <p className='small-text'>Know the facts about SPF protection and its correct usage</p>
                    <img src={require('../assets/sunscreen-woman.jpeg')} alt='Woman applying sunscreento her nose' className='home-image'/>
                </div>
                <div className='small-info-section' data-cy='small-info-section'>
                    <p className='small-text'>Protect yourself and loved ones from melanoma and skin disease</p>
                    <img src={require('../assets/generational.jpeg')} alt='Smiling family of three generations' className='home-image'/>
                </div>
            </aside>
        </form>
    )
}


export default ZipInput

ZipInput.propTypes = {
    addZipcode: propTypes.func.isRequired
}