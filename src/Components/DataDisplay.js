import React from 'react'
import HourlyUVChart from './HourlyUVChart'
import '../Styles/DataDisplay.css'

const DataDisplay = () => {



    return (
        <section className='data-section'>
            <div className='data-top'>
                <div className='location-date'>
                    <h3>City, ST</h3>
                    <h4>Month Day, Year</h4>
                </div>
                <div className='daily-uv'>
                    <div className='uv-max'>
                        <h3 className='max-heading'>UV Max</h3>
                        <h4 className='max-number'>2</h4>

                    </div>
                <p className='high-low-key'>Low</p>
                </div>
                <div className='safe-exposure'>
                    <h3>Safe Exposure for Skin Type</h3>
                    <div className='exposure-inputs'>
                        <select >
                            <option>skin type</option>
                            <option>Type I</option>
                            <option>Type II</option>
                            <option>Type III</option>
                            <option>Type IV</option>
                            <option>Type V</option>
                            <option>Type VI</option>
                        </select>

                        <select >
                            <option>uv index</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                    <h4>Your maximum safe exposure time is ---- minutes.</h4>
                </div>
            </div>

            <HourlyUVChart />
            
            <div className='data-bottom'>
                <h1>icons go here</h1>
            </div>
        </section>
        
    )
}

export default DataDisplay