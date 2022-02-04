import React from 'react';

import { ButtonProps } from './types';
import * as Styled from './styled';

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick = () => {},
  ...rest
}) => (
  <Styled.ButtonWrapper disabled={disabled} onClick={onClick} {...rest}>
    <Styled.TextWrapper disabled={disabled}>
      {children}
    </Styled.TextWrapper>
  </Styled.ButtonWrapper>
);

export default Button;
