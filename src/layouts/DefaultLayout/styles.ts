import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 60rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 1.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    padding: 2.5rem;
    max-width: 60rem;
    height: calc(100vh - 6rem);
  }

  @media (max-width: 1024px) {
    padding: 2rem;
    max-width: 44rem;
    height: calc(100vh - 8rem);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 28rem;
    height: calc(100vh - 6rem);
  }

  @media (max-width: 425px) {
    padding: 1rem;
    max-width: 20rem;
    height: calc(100vh - 4rem);
  }

  @media (max-width: 320px) {
    padding: 0.5rem;
    max-width: 20rem;
    height: calc(100vh - 2rem);
  }
`
