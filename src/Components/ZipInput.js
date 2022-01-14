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
            <form>
                <label className='zipcode'>
                    <input className='zipcode-input' placeholder='Zip Code' onChange={(e) => this.handleChange(e)}/>
                </label>
                <div className='button-container'>
                    <button className='go-button' onClick={(e) => this.submitZipcode(e)}>Go</button>
                </div>
            </form>
        )
    }

    
}

export default ZipInput