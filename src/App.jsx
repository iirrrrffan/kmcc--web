import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './user/pages/Home'
import CheckHimaya from './user/pages/CheckHimaya';

function App() {

  return (
    <>
      <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='log' element={<CheckHimaya/>}/>
     </Routes>
      </div>

    </>
  )
}

export default App
