import React from 'react'
import '../Styles/UvGuide.css'

const UvGuide = () => {

    return (
        <section className='uv-guide'>
            <img src={require('../assets/uv-index-guide.png')} className='uv-guide-image'/>
            <div className='factors-section'>
                <h2 className='factors-heading'>Factors contributing to UV grades</h2>
                <ul>
                    <li>Sun elevation</li>
                    <li>Amount of ozone in atmosphere</li>
                    <li>Altitude</li>
                    <li>Cloud coverage | thickness</li>
                    <li>Reflection of elements | snow or rain</li>
                    <li>Reflection of varying earth surfaces such as sand</li>
                    <li>Reflection of local pollution</li>
                    <li>Sun's angle</li>
                </ul>
            </div>

        </section>
    )
}

export default UvGuide