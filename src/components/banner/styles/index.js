import styled from 'styled-components/macro';
import { GlassBox } from '../../../styles/glass';

export const Container = styled(GlassBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  width: 100%;
  margin: 0 auto;
  margin-top: 1.5em;
  border-radius: 2em;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 1em;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  letter-spacing: 7px;
  padding: 0.4em;
  font-size: 3.5em;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  letter-spacing: 4px;
  margin-bottom: 1em;
  padding: 1em;
  @media (max-width: 1000px) {
    font-size: 0.95em;
  }
`;
