import React, {useState} from 'react';
import { Wrapper, NavbarWrapper, Logo, NavbarBody, Container, Hamburger, UserIcon,Close,DrawerItem, DrawSocials, Social, ActiveStyle } from './style';
import {navbar} from '../../utils/navbar';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import { Drawer } from 'antd';
import {Button} from '../Generic/Button';


const Navbar = () => {

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
      setVisible(true);
  };

  const onClose = () => {
      setVisible(false);
  };

  const onChange = (e) => {
      setPlacement(e.target.value);
    };

  return (
    <Wrapper className='nocopy'>
        <Container>
            <NavbarWrapper>
                <Hamburger onClick={showDrawer}/>

                <Drawer
                  title="Basic Drawer"
                  placement={placement}
                  closable={false}
                  onClose={onClose}
                  visible={visible}
                  key={placement}
                >
                   <Close onClick={onClose} />
                   {
                      navbar.map(({id, title, path, Element, hidden}) => {
                          return (
                            !hidden &&(
                            <DrawerItem to={path} key={id} element={Element}>{title}</DrawerItem>
                            ))
                      })
                   }
                  <DrawSocials>
                      <Social>
                         <a href="#">
                            <Social.Facebook/>
                         </a>
                      </Social>
                       <Social>
                         <a href="#">
                            <Social.Instagram/>
                         </a>
                      </Social>
                       <Social>
                         <a href="#">
                            <Social.Twitter/>
                         </a>
                      </Social>
                       <Social>
                         <a href="#">
                            <Social.Linkedin/>
                         </a>
                      </Social>
                  </DrawSocials>
                </Drawer>
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
              <div className='login'>
                <Button className='login' width={'120px'}>SignIn</Button>
              </div>
                <UserIcon/>
            </NavbarWrapper>
        </Container>
        <Outlet/>
    </Wrapper>
  )
}

export default Navbar