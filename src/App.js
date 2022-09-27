import React from 'react'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'



const App = () => { 

  return (  
    <> 
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<PrivateRoute><DashBoard/></PrivateRoute>} />
      </Routes>
      </BrowserRouter>
    </>    
  )
}

export default App