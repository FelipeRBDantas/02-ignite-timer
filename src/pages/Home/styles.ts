import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem 0;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    @media (max-width: 1440px) {
      gap: 3rem;
      padding: 2rem 0;
    }

    @media (max-width: 1024px) {
      gap: 2.5rem;
      padding: 1.5rem 0;
    }

    @media (max-width: 768px) {
      gap: 2rem;
      padding: 1.25rem 0;
    }

    @media (max-width: 425px) {
      gap: 1.5rem;
      padding: 1rem 0;
    }

    @media (max-width: 320px) {
      gap: 1rem;
      padding: 0.75rem 0;
    }
  }
`

export const BaseCountdownButton = styled.button`
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
