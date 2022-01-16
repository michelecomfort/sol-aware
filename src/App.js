import React, { Component } from 'react'
import Header from './Components/Header'
import ZipInput from './Components/ZipInput'
import DataDisplay from './Components/DataDisplay';
import UvGuide from './Components/UvGuide';
import SkinTypes from './Components/SkinTypes'
import { Routes, Route } from 'react-router-dom'
import './App.css';
// import AppContext from './AppContext'



class App extends Component {
  constructor() {
    super()
    this.state = {
      zipcode: '',
      
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
    
  }


  
  render() {
      return (
        
          <main className="nav">
              <Header />
            <Routes>
            
              <Route path='/' element={<ZipInput setCityState={this.setCityState} setUvData={this.setUvData} setZipCode={this.setZipCode}/>}>

                </Route>
          
              <Route path='/datadisplay' element={<DataDisplay zipcode={this.state.zipcode} uvData={this.state.uvData}/>}>

              </Route>
              <Route path='/uvGuide' element={<UvGuide/>}>

              </Route>
              <Route path='/skinTypes' element={<SkinTypes />}>

              </Route>
            
            
            </Routes>
            
          </main>
        
      )
    }
}

export default App;
