import React from 'react';
import { Container, Icon, Wrapper } from './style';

const Input = ({
  children,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange,
  name,
  value,
  placeholder,
  defaultValue,
}) => {
  return (
    <Wrapper>
      <Icon>{children}</Icon>
      <Container
        defaultValue={defaultValue}
        name = {name}
        onChange= {onChange}
        placeholder={placeholder}
        mt={mt}
        mb={mb}
        pl={pl}
        type={type}
        width={width}
        height={height}
        value={value}
      />
    </Wrapper>
  );
};

export default Input;
