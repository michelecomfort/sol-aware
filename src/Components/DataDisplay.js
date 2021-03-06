import React, { useState, useEffect, useLayoutEffect } from 'react'
import HourlyUVChart from './HourlyUVChart'
import '../Styles/DataDisplay.css'
import apiCalls from '../apiCalls.js'
import { useLocation } from 'react-router-dom'
import propTypes from 'prop-types'

const date = new Date()
const month = date.getUTCMonth() + 1
const day = date.getUTCDate()

const DataDisplay = ({ addToSavedZips })  => {
    const [cityState, setCityState] = useState('')
    const [uvData, setUvData] = useState([])
    const [date, setDate] = useState('')
    const [uvHigh, setUvHigh] = useState('')
    const [exposureMinutes, setExposureMinutes] = useState('')
    const [error, setError] = useState('')
    const zipcodeID = parseInt(useLocation().pathname.split('/')[1])
    
    useEffect(() => {
        if(zipcodeID) {
            apiCalls.getUvData(zipcodeID)
                .then(data => {
                    if(data.error) {
                        setError(data.error)
                    } else {
                        setUvData(data)
                    }
                })
                
            apiCalls.getCityState(zipcodeID)
                .then(data => {
                    if(data.error) {
                        setError(data.error)
                    } else {
                        setCityState(data.city + ', ' + data.state)
                    }     
                })
        }   
    }, [])

    useLayoutEffect(() => {
        if(uvData.length > 0) {
            const high = uvData.map(obj => {
                return obj['UV_VALUE']
            }).sort((a, b) => {
                return b - a
            })
            setUvHigh(high[0])
            const month = uvData[0]['DATE_TIME'].split(' ')[0].split('/')[0]
            const day = uvData[0]['DATE_TIME'].split(' ')[0].split('/')[1]
            setDate(month + ' ' + day)
        }
    })

    const getUvStatus = () => {
        if(uvHigh <= 2) {
            return 'Low'
        } else if (2 < uvHigh <= 5 ) {
            return 'Moderate'
        } else if (5 < uvHigh <= 7) {
            return 'High'
        } else if (7 < uvHigh <= 10) {
            return 'Very High'
        } else if (uvHigh > 10) {
            return 'Extreme'
        }
    }

    const grabExposureMinutes = (skinType) => {
        let type;
        switch(skinType) {
            case 'Type I':
                type = 2.5
                break;
            case 'Type II':
                type = 3
                break;
            case 'Type III':
                type = 4
                break;
            case 'Type IV':
                type = 5
                break;
            case 'Type V':
                type = 8
                break;
            case 'Type VI':
                type = 15
                break;
        }
        setExposureMinutes(`Your maximum safe exposure time is ${Math.floor((200 * type) / (3 * uvHigh))} minutes.`)
    }

    const saveThisZip = () => {
        addToSavedZips(zipcodeID)
    }

    return (
        <main>
            { error || !zipcodeID ? <p className='error-message'>Sorry, there's been an error: '{error}' Please return to the home page and try again!</p> : 
            <section className='data-section' data-cy='data-section' aria-label='Section displaying data of uv levels per zipcode location'>
                <div className='data-top'>
                    <div className='location-date'>
                        <h3 className='location' data-cy='city-state'>{cityState}</h3>
                        <h4 className='date' data-cy='date'>{date}</h4>
                        <button className='save-location-button' aria-label='Save location button'onClick={() => saveThisZip()}>Save location</button>
                    </div>
                    <div className='daily-uv'>
                        <div className='uv-max'>
                            <h3 className='max-heading' data-cy='max-heading'>UV Max</h3>
                            <h4 className='max-number' data-cy='max-number'>{uvHigh}</h4>
                        </div>
                    <p className='high-low-key'>{getUvStatus()}</p>
                    </div>
                    <div className='safe-exposure' data-cy='safe-exposure'>
                        <h3 className='safe-exposure-heading' data-cy='safe-exposure-heading'>Safe Exposure for Skin Type</h3>
                        <div className='exposure-inputs'>
                            <input onChange={(e) => grabExposureMinutes(e.target.value)} list='skin-type' aria-label='Choose skin type to determine your safe exposure minutes' placeholder='skin type' data-cy='skin-type-input'/>
                                <datalist id='skin-type'>
                                    <option value='Type I'>Type I</option>
                                    <option value='Type II'>Type II</option>
                                    <option value='Type III'>Type III</option>
                                    <option value='Type IV'>Type IV</option>
                                    <option value='Type V'>Type V</option>
                                    <option value='Type VI'>Type VI</option>
                                </datalist>
                        </div>
                        <h4 className='exposure-minutes' data-cy='exposure-minutes'>{exposureMinutes}</h4>
                    </div>
                </div>
    
                <HourlyUVChart uvData={uvData}/>
    
                <aside className='bottom-section' data-cy='icon-grid'>
                    <h1 className='protection-message'>Keep yourself protected during sun exposure</h1>
                    <div className='icon-grid'>
                        <div  data-cy='icon'>
                            <img src={require('../assets/hat.png')} alt='Baseball hat icon'className='icon'/>
                        </div>
                        <div data-cy='icon'>
                            <img src={require('../assets/sunscreen.png')} alt='Sunscreen bottle icon' className='icon'/>
                        </div>
                        <div data-cy='icon'>
                            <img src={require('../assets/umbrella.png')} alt='Beach umbrella icon' className='icon'/>
                        </div>
                    </div>
                </aside>
            </section>
            }
        </main> 
    )
}

export default DataDisplay

DataDisplay.propTypes = {
    addToSavedZips: propTypes.func.isRequired
}