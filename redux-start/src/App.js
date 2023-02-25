import React from 'react'
import classes from './App.module.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Todos from './pages/Todos'
import GoodApi from './pages/GoodApi'

const App = () => {


  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/todo' element={<Todos/>}/>
          <Route path='/api' element={<GoodApi/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App