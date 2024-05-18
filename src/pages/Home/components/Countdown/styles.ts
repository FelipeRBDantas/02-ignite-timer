import styled from 'styled-components'

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
