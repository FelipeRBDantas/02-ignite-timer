import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1rem; // inherit
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 1440px) {
    height: 2rem;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    height: 1.75rem;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    height: 1.5rem;
    font-size: 0.75rem;
  }

  @media (max-width: 425px) {
    height: 1.25rem;
    font-size: 0.625rem;
  }

  @media (max-width: 320px) {
    height: 1rem;
    font-size: 0.5rem;
  }
`

export const TaskInput = styled(BaseInput)`
  width: 17rem;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  @media (max-width: 1440px) {
    width: 17rem;
  }

  @media (max-width: 1024px) {
    width: 15rem;
  }

  @media (max-width: 768px) {
    width: 13rem;
  }

  @media (max-width: 425px) {
    width: 11rem;
  }

  @media (max-width: 320px) {
    width: 9rem;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 2.5rem;

  @media (max-width: 1440px) {
    width: 3.5rem;
  }

  @media (max-width: 1024px) {
    width: 2.25rem;
  }

  @media (max-width: 768px) {
    width: 2rem;
  }

  @media (max-width: 425px) {
    width: 1.75rem;
  }

  @media (max-width: 320px) {
    width: 1.5rem;
  }
`
