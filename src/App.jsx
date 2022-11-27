import { useState } from 'react'
import {AuthProvider} from './context/AuthProvider';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import OwnerSignUp from './pages/OwnerSignUp'
import OwnerLogIn from './pages/OwnerLogIn'
import Home from './pages/Home'
import Layout from './layout/Layout';

import RequireAuth from './pages/requireAuth';
import HostelDashboard from './pages/HostelDashboard'
import OwnerDashboard from './pages/OwnerDashboard';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
    <Route path="/" element={<Layout/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="signup" element={<OwnerSignUp/>} />   
    <Route path="login" element={<OwnerLogIn/>} /> 
    <Route element={<RequireAuth/>}>
      <Route path="owner/dashboard" element={<OwnerDashboard/>}/>
      <Route path="owner/hostel-dashboard" element={<HostelDashboard/>}/>
    </Route>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App