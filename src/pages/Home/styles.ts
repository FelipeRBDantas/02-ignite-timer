import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    @media (max-width: 1440px) {
      gap: 3rem;
    }

    @media (max-width: 1024px) {
      gap: 2.5rem;
    }

    @media (max-width: 768px) {
      gap: 2rem;
    }

    @media (max-width: 425px) {
      gap: 1.5rem;
    }

    @media (max-width: 320px) {
      gap: 1rem;
    }
  }
`

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

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 9rem;
  line-height: 7rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1.5rem;

  @media (max-width: 1440px) {
    font-size: 10rem;
    line-height: 8rem;
  }

  @media (max-width: 1024px) {
    font-size: 7.5rem;
    line-height: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 7rem;
    line-height: 4rem;
  }

  @media (max-width: 425px) {
    font-size: 6.5rem;
    line-height: 3rem;
  }

  @media (max-width: 320px) {
    font-size: 6rem;
    line-height: 2rem;
  }

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 1.5rem 0.5rem;
    border-radius: 8px;

    @media (max-width: 1440px) {
      padding: 1.5rem 0.5rem;
    }

    @media (max-width: 1024px) {
      padding: 1.25rem 0.25rem;
    }

    @media (max-width: 768px) {
      padding: 1rem 0.25rem;
    }

    @media (max-width: 425px) {
      padding: 0.75rem 0.25rem;
    }

    @media (max-width: 320px) {
      padding: 0.5rem 0.25rem;
    }
  }
`

export const Separator = styled.div`
  padding: 1.5rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 3.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 1440px) {
    padding: 1.5rem 0;
    width: 3.5rem;
  }

  @media (max-width: 1024px) {
    padding: 1.25rem 0;
    width: 3rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    width: 2.5rem;
  }

  @media (max-width: 425px) {
    padding: 0.75rem 0;
    width: 2rem;
  }

  @media (max-width: 320px) {
    padding: 0.5rem 0;
    width: 1.5rem;
  }
`

export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 0.8rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }

  @media (max-width: 1440px) {
    padding: 0.8rem;
  }

  @media (max-width: 1024px) {
    padding: 0.6rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  @media (max-width: 425px) {
    padding: 0.4rem;
  }

  @media (max-width: 320px) {
    padding: 0.3rem;
  }
`
