import styled from 'styled-components';

import { ButtonProps, TextProps } from './types';

export const TextWrapper = styled.div<TextProps>`
    pointer-events: none;
    height: 24px;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.3px;
    text-align: center;
    color: ${(props) => (props.disabled ? '#aca8a8' : '#fff')};

    
`;

export const ButtonWrapper = styled.button.attrs(
  (props) => ({ type: props.type || 'button' }),
)<ButtonProps>`
    display: flex;
    justify-content: center;
    padding-left: 17px;
    padding-right: 17px;
    align-items: center;
    text-decoration: none;
    vertical-align: middle;
    min-height: 50px;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${(props) => (props.disabled ? '#747272' : '#0f60f7')};
    border: solid 1px;
    border-color: ${(props) => (props.disabled ? '#747272' : '#0f60f7')};
    
    &:focus {
        border: none;
    }
`;
