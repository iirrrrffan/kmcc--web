import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './user/pages/Home'
import CheckHimaya from './user/pages/CheckHimaya';
import Overview from './user/pages/Overview';

function App() {

  return (
    <>
      <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='log' element={<CheckHimaya/>}/>
        <Route path='overview' element={<Overview/>}/>
     </Routes>
      </div>

    </>
  )
}

export default App
