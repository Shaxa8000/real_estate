import styled, {css} from 'styled-components';
import {ReactComponent as logo} from '../../assets/icons/logo.svg';
import {ReactComponent as hamburger} from '../../assets/icons/hamburger.svg';
import {ReactComponent as user} from '../../assets/icons/user.svg';
import {ReactComponent as close} from '../../assets/icons/close.svg';
import {ReactComponent as facebook} from '../../assets/icons/facebook.svg'
import {ReactComponent as twitter} from '../../assets/icons/twitter.svg'
import {ReactComponent as instagram} from '../../assets/icons/instagram.svg'
import {ReactComponent as linkedin} from '../../assets/icons/linkedin.svg'
import { NavLink } from 'react-router-dom';

const common = css`
  display: flex;
  align-items: center;
  justify-content: center;
`


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  ${common};
  background: var(--primaryColor);
  
  
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  max-width: var(--width);
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
  padding: 0 130px;
  @media(max-width: 834px){
    display: flex;
    justify-content: space-between;
    align-items: center;

    .login{
      display: none;
    }
  }

  @media(max-width: 428px){
    padding: 0 20px;
  }
`;



const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Icon = styled(logo)`
   @media(max-width: 834px){
    width: 30px;
  }

  @media(max-width: 428px){
    width: 28px;
  }
`;

Logo.Title = styled('div')`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500px;
`;

const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  @media(max-width: 834px){
    display: none;
  }
`

const Hamburger = styled(hamburger)`
   display: none;

   @media(max-width: 834px){
     display: block;
  }
`

const UserIcon = styled(user)`
  display: none;
  
  @media(max-width: 834px){
    display: block;
    width: 23px;
    height: 23px;
  }

  @media(max-width : 428px){
    width: 18px;
    height: 18px;
  }
`

const Close = styled(close)`
  position: absolute;
  top: 25px;
  left: 25px;
  transition: transform .3s ease;

  :active {
        transform: scale(0.97);
    }
`

const DrawerItem = styled(NavLink)`
  ${common};
  color: black;
  text-decoration: none;
  margin: 0 32px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  list-style-type: none;
  width: 100%;
  height: 50px;
`

const DrawSocials = styled.div`
  ${common};
  gap: 10px;
  margin-top: 80px;

`

const Social = styled.div`
  background: transparent;
  border-radius: 4px;
    :hover {
        background: #E7E9EB;
    }
`

Social.Facebook = styled(facebook)`
  width: 36px;
  height: 36px;
`;
Social.Instagram = styled(instagram)`
  width: 36px;
  height: 36px;
`;
Social.Twitter = styled(twitter)`
width: 36px;
height: 36px;
`;
Social.Linkedin = styled(linkedin)`
  width: 36px;
  height: 36px;
`;


const ActiveStyle = ({isActive}) => {
   return {
    color: isActive? '#00fff5' : 'white',
    textDecoration: 'none',
    margin: '0 32px',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '24px',
   }
};


export {Wrapper, NavbarWrapper, Logo, NavbarBody, Container,Hamburger, UserIcon,Close,DrawerItem, DrawSocials, Social, ActiveStyle}




