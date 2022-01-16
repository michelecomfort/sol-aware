import React from 'react'
import '../Styles/SkinTypes.css'

const SkinTypes = () => {
    return (
        <div className='skin-type-section' data-cy='skin-type-section'>
            <h2 data-cy='determining-skin-type-heading'>Determining your Skin Type</h2>
            <div className='skin-type-images'>
                <img src={require('../assets/skin-types.png')} className='skin-type-image' data-cy='skin-type-image'/>
                <img src={require('../assets/smiling-woman.jpeg')} className='smiling-woman-image' data-cy='smiling-woman-image'/>
            </div>
        </div>
    )
}

export default SkinTypes