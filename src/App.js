import React from 'react'
import {BrowserRouter,  Routes,Route ,Router} from 'react-router-dom';
import Contact from './Component/Contact';
import Education from './Component/Education';
import Home from './Component/Home';
import Homes from './Component/Homes';
import Menu from './Component/Menu'
import Myproject from './Component/Myproject';
import Pnf from './Component/Pnf'
import Skills from './Component/Skills';


function App() {
return(

  <BrowserRouter>
  <Menu/>

  <Routes>
  <Route path={'/'} element = {<Home/>}/>

    <Route path={'/menu'} element = {<Menu/>}/>
    <Route path={'/education'} element = {<Education/>}/>
    <Route path={'/skills'} element = {<Skills/>}/>
    <Route path={'/myprojects'} element = {<Myproject/>}/>
    <Route path={'/contact'} element = {<Contact/>}/>
    <Route path={'/*'} element = {<Pnf/>}/>
  </Routes>
 
  </BrowserRouter>
)
}


export default App
