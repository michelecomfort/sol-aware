import React, { Component } from 'react'
import '../Styles/ZipInput.css'
import '../apiCalls.js'
import apiCalls from '../apiCalls.js'

class ZipInput extends Component {
    constructor() {
        super()
        this.state = {
            zipcode: '',
            cityState: '',
            uvData: []
        }
    }

    handleChange = (e) => {
        this.setState({ zipcode: e.target.value})
    }

    submitZipcode = (e) => {
        e.preventDefault()
        const zip = this.state.zipcode
        apiCalls.getUvData(zip)
            .then(data => {
                
                this.props.setUvData(data)
            })
        apiCalls.getCityState(zip)
            .then(data => {
                this.props.setCityState(data)
                
            })
            
            this.props.setZipCode(zip)
    }



    render() {
        return (
            <form className='zipcode-form'>
                <div className='input-section'>
                    <h2 className='slogan'>skin health starts with sun knowledge</h2>
                    <div className='input-button'>
                        <label className='zipcode'>
                            <input className='zipcode-input' placeholder='Zip Code' onChange={(e) => this.handleChange(e)}/>
                        </label>
                        <div className='button-container'>
                            <button type='button'className='go-button' onSubmit={(e) => this.submitZipcode(e)} >Go</button>
                        </div>
                    </div>
                </div>
                <aside className='small-grid'>
                    <div className='small-info-section'>
                        <p className='small-text'>The health of our skin starts with decisions we make everyday</p>
                        <img src={require('../assets/sunflower-woman.jpeg')}/>
                    </div>
                    <div className='small-info-section'>
                        <p className='small-text'>Understand the truth about SPF protection and its correct usage</p>
                        <img src={require('../assets/sunscreen-woman.jpeg')}/>
                    </div>
                    <div className='small-info-section'>
                        <p className='small-text'>Protect yourself and loved ones for melanoma and skin disease</p>
                        <img src={require('../assets/generational.jpeg')}/>
                    </div>
                </aside>
            </form>
        )
    }

    
}

export default ZipInput