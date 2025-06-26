import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './static/Header'
import Footer from './static/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
   
<BrowserRouter>
 {/* <Header/> */}

<Routes>


<Route  path='/' element ={<Home/>}  />
<Route path='/about' element ={<About />}/>
<Route  path='/contact' element={<Contact />}/>

</Routes>

 <Footer/>

</BrowserRouter>


    </div>
  )
}

export default App