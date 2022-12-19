import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Location from '../Pages/Location'
import Navbar from '../component/Navbar'
import Characters from '../Pages/Characters'
import CharactersDetails from '../Pages/CharactersDetails'

const AppRouter = () => {
  return (
    <>
    <Navbar/>

    <Routes>
        <Route path='/' element={<Location/>}/>
        <Route path='/:name' element={<Characters/>}/>
        <Route path='/:name/:id' element={<CharactersDetails/>}/>
    </Routes>
    </>
  )
}

export default AppRouter