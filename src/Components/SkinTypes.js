import React from 'react'
import '../Styles/SkinTypes.css'

const SkinTypes = () => {
    return (
        <div className='skin-type-section'>
            <h2>Determing your Skin Type</h2>
            <div className='skin-type-images'>
                <img src={require('../assets/skin-types.png')} className='skin-type-image'/>
                <img src={require('../assets/smiling-woman.jpeg')} className='smiling-woman-image'/>
            </div>
        </div>
    )
}

export default SkinTypes