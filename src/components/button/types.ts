import { ButtonHTMLAttributes } from 'react';

export type ButtonType = 'primary' | 'secondary' | 'tertiary'

export interface TextProps {
    disabled?: boolean;
    buttonType?: ButtonType;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & TextProps
