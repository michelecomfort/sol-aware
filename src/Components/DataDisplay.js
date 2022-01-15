import React, { Component } from 'react'
import HourlyUVChart from './HourlyUVChart'
import '../Styles/DataDisplay.css'
import apiCalls from '../apiCalls.js'
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
            exposureMinutes: ''
        }
    }

    componentDidMount = () => {
        apiCalls.getUvData(this.props.zipcode)
            .then(data => {
                const month = data[0]['DATE_TIME'].split(' ')[0].split('/')[0]
                const day = data[0]['DATE_TIME'].split(' ')[0].split('/')[1]
                this.setState({uvData: data, date: month + ' ' + day})
                this.findHighUv()
            })

        apiCalls.getCityState(this.props.zipcode)
            .then(data => this.setState({cityState: data.city + ', ' + data.state})
            )   
    }

    findHighUv = () => {
        const high = this.state.uvData.sort((a, b) => b.UV_VALUE - a.UV_VALUE
        ).map(obj => obj.UV_VALUE)
        this.setState({ uvHigh: high[0]})
    }

    grabExposureMinutes = (skinType) => {
        let type;
        switch(skinType) {

            case 'Type I':
            type = 2.5
            case 'Type II':
            type = 3
            case 'Type III':
            type = 4
            case 'Type IV':
            type = 5
            case 'Type V':
            type = 8
            case 'Type VI':
            type = 15
        }
        this.setState({ exposureMinutes: `Your maximum safe exposure time is ${(200 * type) / (3 * this.state.uvHigh)} minutes.` })
    }



    render() {
        return (
            <section className='data-section'>
                <div className='data-top'>
                    <div className='location-date'>
                        <h3>{this.state.cityState}</h3>
                        <h4>{this.state.date}</h4>
                    </div>
                    <div className='daily-uv'>
                        <div className='uv-max'>
                            <h3 className='max-heading'>UV Max</h3>
                            <h4 className='max-number'>{this.state.uvHigh}</h4>
    
                        </div>
                    <p className='high-low-key'>Low</p>
                    </div>
                    <div className='safe-exposure'>
                        <h3>Safe Exposure for Skin Type</h3>
                        <div className='exposure-inputs'>
                            <input onChange={(e) => this.grabExposureMinutes(e.target.value)} list='skin-type' placeholder='skin type'/>
                                <datalist id='skin-type'>
                                    <option value='Type I'>Type I</option>
                                    <option value='Type II'>Type II</option>
                                    <option value='Type III'>Type III</option>
                                    <option value='Type IV'>Type IV</option>
                                    <option value='Type V'>Type V</option>
                                    <option value='Type VI'>Type VI</option>
                                </datalist>
                        </div>
                        <h4>{this.state.exposureMinutes}</h4>
                    </div>
                </div>
    
                <HourlyUVChart />
    
                <div className='data-bottom'>
                    <h1>icons go here</h1>
                </div>
            </section>
            
        )

    }
}

export default DataDisplay