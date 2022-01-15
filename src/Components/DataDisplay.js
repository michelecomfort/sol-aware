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
            uvHigh: ''
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
            .then(data => {
                
                this.setState({cityState: data.city + ', ' + data.state,})
            })
            
    }

    findHighUv = () => {
        const high = this.state.uvData.reduce((acc, day) => {
            acc.push(day.UV_VALUE)
            return acc
        }, []).sort((a, b) => {
            return b - a
        })
        console.log(high[0])
        return high[0]
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
                            <h4 className='max-number'>{this.findHighUv()}</h4>
    
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
}

export default DataDisplay