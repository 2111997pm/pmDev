import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import NewUpdate from './components/NewUpdate'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update/:id' element={<NewUpdate />} />
        </Routes>

      </BrowserRouter>


      


    </>
  )
}

export default App