import styled from 'styled-components';
import {ReactComponent as logo} from '../../assets/icons/logo.svg';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);
`;

const NavbarWrapper = styled.div`
  display: flex;
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
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Icon = styled(logo)``;
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






export {Wrapper, NavbarWrapper, Logo, NavbarBody, Container, ActiveStyle}