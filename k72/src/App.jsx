import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Agency from './Pages/Agency'

const App = () => {
  return (
    <div className='h-screen w-screen'>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agency' element={<Agency />} />
      </Routes>
    </div>
  )
}

export default App