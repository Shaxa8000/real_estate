import styled from 'styled-components';


const getType = (type) => {
  switch (type) {
    case 'secondary':
      return {
        border: '1px solid #E6E9EC',
        color: '#0D263B',
      };
    case 'primary':
      return {
        border: 'none',
        color: '#FFFFFF',
        background: '#0061DF',
      };

    default:
      return {
        border: '1px solid #E6E9EC',
        color: '#FFFFFF',
      };
  }
};


const Container = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  /* font-height: 20px; */
  justify-content: center;
  align-items: center;

  height: ${({ height }) => height ? `${height}px` : '44px'};
  min-width: ${({ width }) => (width ? `${width}px` : '100%')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  border-radius: 2px;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  cursor: pointer;
  ${({ type }) => getType(type)}
  :active {
      transform: scale(0.98);
      opacity: 0.7;
  }
`;

export { Container };