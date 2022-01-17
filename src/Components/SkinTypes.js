import React from 'react'
import '../Styles/SkinTypes.css'

const SkinTypes = () => {
    return (
        <div className='skin-type-section' data-cy='skin-type-section'>
            <h2 className='determining-skin-type-heading' data-cy='determining-skin-type-heading'>Determining your Skin Type</h2>
            <div className='skin-type-images'>
                <img src={require('../assets/skin-types.png')} alt='Chart displaying different skin types based on characteristics' className='skin-type-image' data-cy='skin-type-image'/>
                <img src={require('../assets/smiling-woman.jpeg')} alt='Woman wearing sunglasses and smiling in the sunshine' className='smiling-woman-image' data-cy='smiling-woman-image'/>
            </div>
        </div>
    )
}

export default SkinTypes