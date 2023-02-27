import React from 'react'
import classes from './App.module.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Todos from './pages/Todos'
import Api from './pages/Api'

const App = () => {


  return (
    <div className={classes.app}>
      
      <BrowserRouter>
        <div className={classes.nav}>
          <Link className={classes.nav_item} to={'todo'}>
            TODO I
          </Link>
          <Link className={classes.nav_item} to={'api'}>
            API QUERY II
          </Link>
        </div>
        <Routes>
          <Route path='/todo' element={<Todos/>}/>
          <Route path='/api' element={<Api/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App