import React from 'react';
import { Wrapper, NavbarWrapper, Logo, NavbarBody, Container, ActiveStyle } from './style';
import {navbar} from '../../utils/navbar';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import Button  from '../Generic/Button';



const Navbar = () => {

  const navigate = useNavigate();

  return (
    <Wrapper className='nocopy'>
        <Container>
            <NavbarWrapper>
                <Logo onClick={()=> navigate('/home')}>
                  <Logo.Icon/>
                  <Logo.Title>Houzing</Logo.Title>
                </Logo>
                
                <NavbarBody>
                  {
                    navbar.map((value)=>{
                       return(
                        !value.hidden &&(
                        <NavLink style={ActiveStyle} key={value.id} to={value.path}>
                            {value.title}
                        </NavLink>
                      ))
                    })
                  }
                </NavbarBody>

                <Button width={'120px'}>SignIn</Button>
                
            </NavbarWrapper>
        </Container>
        <Outlet/>
    </Wrapper>
  )
}

export default Navbar