import React from 'react';
import Navbar from '../components/Navbar';
import HomePage from '../pages/Home';
import { Container } from './style';



const Root = () => {
  return (
    <Container>
       <Navbar/>
       <HomePage/>
    </Container>
  )
}

export default Root