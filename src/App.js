import React, { Component } from 'react'
import Header from './Components/Header'
import ZipInput from './Components/ZipInput'
import './App.css';
// import AppContext from './AppContext'



class App extends Component {
  constructor() {
    super()
    this.state = {
      zipcode: '',
      cityState: '',
      uvData: []
    }
  }

  setZipCode = (zip) => {
    this.setState({ zipcode: zip })
  }
  setCityState = (data) => {
    this.setState({ cityState: data.city + ', ' + data.state })
    
  }

  setUvData = (data) => {
    this.setState({ uvData: data })
    console.log(this.state)
  }


  
  render() {
      return (
        
          <main className="nav">
            <Header />
            <ZipInput setCityState={this.setCityState} setUvData={this.setUvData} setZipCode={this.setZipCode}/>
          </main>
        
      )
    }
}

export default App;
