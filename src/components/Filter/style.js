import styled from 'styled-components';
import {ReactComponent as home} from '../../assets/icons/home.svg';
import {ReactComponent as filter} from '../../assets/icons/filter.svg';
import {ReactComponent as search} from '../../assets/icons/search.svg';

const Container = styled.div`
  display: flex;
  max-width: var(--width);
  width: 100%;
  padding: 0 130px;
  gap: 20px;
  margin: 10px 0;
`;

const Icon = styled.div`
  margin-right: 8px;
`;

Icon.Home = styled(home)`
  margin-top: 6px;
  margin-right: 8px;
`;

Icon.Filter = styled(filter)`
  margin-right: 10px;
`;

Icon.Search = styled(search)`
  margin-right: 8px;
`;

const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
`;

Advanced.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0D263B;
`;

const Section = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
  gap: 0 20px;
`



export {Container, Icon, Advanced, Section}