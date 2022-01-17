import React, { useState, useEffect } from 'react'
const date = new Date()
const month = date.getUTCMonth() + 1
const day = date.getUTCDate()

const DataDisplay = ({ zipcode })  => {
    const [cityState, setCityState] = useState('')
    const [uvData, setUvData] = useState([])
    const [date, setDate] = useState('')
    const [uvHigh, setUvHigh] = useState('')
    const [exposureMinutes, setExposureMinutes] = useState('')
    const [error, setError] = useState('')
        

    useEffect(() => {
        if(zipcode) {

            apiCalls.getUvData(zipcode)
                .then(data => {
                    if(data.error) {
                        setError(data.error)
                    } else {
                        const month = data[0]['DATE_TIME'].split(' ')[0].split('/')[0]
                        const day = data[0]['DATE_TIME'].split(' ')[0].split('/')[1]
                        setUvData(data)
                        setDate(month + ' ' + day)
                        findHighUv()
                    }
                })
                
                apiCalls.getCityState(zipcode)
                .then(data => {
                    if(data.error) {
                        setError(data.error)
                    } else {
                        setCityState(data.city + ', ' + data.state)
                    }     
                })
            }
    }, [])
        
    const findHighUv = () => {
        const high = uvData.map(obj => {
            return obj['UV_VALUE']
        }).sort((a, b) => {
            return b - a
        })
        setUvHigh(high[0])
    }

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

    return (
        <main>
            { error ? <p className='error-message'>Sorry, there's been an error: '{error}' Please return to the home page and try again!</p> : 
            <section className='data-section' data-cy='data-section'>
                <div className='data-top'>
                    <div className='location-date'>
                        <h3 className='location' data-cy='city-state'>{cityState}</h3>
                        <h4 className='date' data-cy='city-state'>{date}</h4>
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
                            <input onChange={(e) => grabExposureMinutes(e.target.value)} list='skin-type' placeholder='skin type' data-cy='skin-type-input'/>
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
                            <img src={require('../assets/hat.png')} className='icon'/>
                        </div>
                        <div data-cy='icon'>
                            <img src={require('../assets/sunscreen.png')} className='icon'/>
                        </div>
                        <div data-cy='icon'>
                            <img src={require('../assets/umbrella.png')} className='icon'/>
                        </div>
                    </div>
                </aside>

            </section>
            }
        </main> 
    )
}

export default DataDisplay

//////
const date = new Date()
const month = date.getUTCMonth() + 1
const day = date.getUTCDate()

class DataDisplay extends Component  {
    constructor() {
        super()
        this.state = {
            cityState: '',
            uvData: [],
            date: '',
            uvHigh: '',
            exposureMinutes: '',
            error: ''
        }
    }

    componentDidMount = () => {
        if(this.props.zipcode) {

            apiCalls.getUvData(this.props.zipcode)
                .then(data => {
                    if(data.error) {
                        this.setState({ error: data.error })
                    } else {
                        const month = data[0]['DATE_TIME'].split(' ')[0].split('/')[0]
                        const day = data[0]['DATE_TIME'].split(' ')[0].split('/')[1]
                        this.setState({uvData: data, date: month + ' ' + day})
                        this.findHighUv()
                    }
                })
                
                apiCalls.getCityState(this.props.zipcode)
                .then(data => {
                    if(data.error) {
                        this.setState({ error: data.error })
                    } else {
                        this.setState({cityState: data.city + ', ' + data.state})
                    }     
                })
            }
        }
        
        findHighUv = () => {

        const high = this.state.uvData.map(obj => {
            return obj['UV_VALUE']
        }).sort((a, b) => {
            return b - a
        })
        this.setState({ uvHigh: high[0]})
    }

    getUvStatus = () => {
        if(this.state.uvHigh <= 2) {
            return 'Low'
        } else if (2 < this.state.uvHigh <= 5 ) {
            return 'Moderate'
        } else if (5 < this.state.uvHigh <= 7) {
            return 'High'
        } else if (7 < this.state.uvHigh <= 10) {
            return 'Very High'
        } else if (this.state.uvHigh > 10) {
            return 'Extreme'
        }
    }

    grabExposureMinutes = (skinType) => {
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
        this.setState({ exposureMinutes: `Your maximum safe exposure time is ${Math.floor((200 * type) / (3 * this.state.uvHigh))} minutes.` })
    }

    render() {
        return (
            <main>
                { this.state.error ? <p className='error-message'>Sorry, there's been an error: '{this.state.error}' Please return to the home page and try again!</p> : 
                <section className='data-section' data-cy='data-section'>
                    <div className='data-top'>
                        <div className='location-date'>
                            <h3 className='location' data-cy='city-state'>{this.state.cityState}</h3>
                            <h4 className='date' data-cy='city-state'>{this.state.date}</h4>
                        </div>
                        <div className='daily-uv'>
                            <div className='uv-max'>
                                <h3 className='max-heading' data-cy='max-heading'>UV Max</h3>
                                <h4 className='max-number' data-cy='max-number'>{this.state.uvHigh}</h4>
                            </div>
                        <p className='high-low-key'>{this.getUvStatus()}</p>
                        </div>
                        <div className='safe-exposure' data-cy='safe-exposure'>
                            <h3 className='safe-exposure-heading' data-cy='safe-exposure-heading'>Safe Exposure for Skin Type</h3>
                            <div className='exposure-inputs'>
                                <input onChange={(e) => this.grabExposureMinutes(e.target.value)} list='skin-type' placeholder='skin type' data-cy='skin-type-input'/>
                                    <datalist id='skin-type'>
                                        <option value='Type I'>Type I</option>
                                        <option value='Type II'>Type II</option>
                                        <option value='Type III'>Type III</option>
                                        <option value='Type IV'>Type IV</option>
                                        <option value='Type V'>Type V</option>
                                        <option value='Type VI'>Type VI</option>
                                    </datalist>
                            </div>
                            <h4 className='exposure-minutes' data-cy='exposure-minutes'>{this.state.exposureMinutes}</h4>
                        </div>
                    </div>
        
                    <HourlyUVChart uvData={this.state.uvData}/>
        
                    <aside className='bottom-section' data-cy='icon-grid'>
                        <h1 className='protection-message'>Keep yourself protected during sun exposure</h1>
                        <div className='icon-grid'>

                            <div  data-cy='icon'>
                                <img src={require('../assets/hat.png')} className='icon'/>
                            </div>

                            <div data-cy='icon'>
                                <img src={require('../assets/sunscreen.png')} className='icon'/>
                            </div>

                            <div data-cy='icon'>
                                <img src={require('../assets/umbrella.png')} className='icon'/>
                            </div>

                        </div>
                    </aside>

                </section>
                }
            </main>
            
        )

    }
}

export default DataDisplay
