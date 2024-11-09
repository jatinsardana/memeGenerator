import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Edit from '../Pages/Edit'

function Mapp() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/' element={<Edit />} />
      </Routes>
    </>
  )
}

export default Mapp
