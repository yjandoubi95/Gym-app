import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar.jsx'

const App = () => {
  
  return (
    <div>
      <h1>Item List</h1>
      <Navbar/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
