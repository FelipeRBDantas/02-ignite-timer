import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  success: 'red',
  danger: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${ props => props.theme['green-500'] };
  color: ${ props => props.theme.white };

  /* ${ props => css`
    background-color: ${ buttonVariants[props.variant] }
  ` } */
`;
