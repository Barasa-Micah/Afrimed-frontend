import { useState } from 'react'
import './App.css'
import Sidebar from './assets/Sidebar'
import Home from './assets/Home'
import Header from './assets/Header'

function App() {
  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
