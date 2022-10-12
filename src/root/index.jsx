import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import NotFound from '../components/NotFound';
import { navbar } from '../utils/navbar';
import { Container } from './style';



const Root = () => {
  return (
   <>
    <Routes>
      <Route element={<Navbar/>} >
       {
        navbar.map(({id, path, Element}) => {
          return <Route key={id} path={path} element={Element} />
        })
       }
      <Route path='/' element={<Navigate to={'/home'} />} />
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    {/* <Footer/> */}
  </>
  )
}

export default Root