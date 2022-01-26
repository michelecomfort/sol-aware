import React, { useState } from 'react'
import Header from './Components/Header'
import ZipInput from './Components/ZipInput'
import DataDisplay from './Components/DataDisplay';
import UvGuide from './Components/UvGuide';
import SkinTypes from './Components/SkinTypes'
import { Routes, Route } from 'react-router-dom'
import './App.css';

const App = () => {

  const [zipcode, setZipcode ] = useState('')
  const [savedZipcodes, saveZipcode] = useState([])

  const addZipcode = (zip) => setZipcode(zip)

  const addToSavedZips = (zipcode) => {
    if(!savedZipcodes.includes(zipcode)) {
      saveZipcode([...savedZipcodes, zipcode])
    }
  }
  
  return (
      <main className="nav">
        <Header />
        <Routes>
          <Route path='/' element={<ZipInput addZipcode={addZipcode} savedZipcodes={savedZipcodes}/>}>
          </Route>
      
          <Route path='/:zipcode' element={<DataDisplay zipcode={zipcode} addToSavedZips={addToSavedZips}/>}>
          </Route>

          <Route path='/uvGuide' element={<UvGuide/>}>
          </Route>

          <Route path='/skinTypes' element={<SkinTypes />}>
          </Route>
        </Routes>
      </main>
  )
}

export default App;
