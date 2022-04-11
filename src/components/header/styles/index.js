import styled from 'styled-components/macro';
import { GlassDiv, GlassBox, glassBg } from '../../../styles/glass';

export const Container = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 1em;
`;

export const Select = styled.div`
  cursor: pointer;

  font-size: 1.1em;
  border-radius: 0.9em;
  display: flex;
  min-width: 7.4%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  &::selection {
    background: yellow;
  }

  &:hover {
    color: #ffffffdf;
  }
`;

export const Option = styled.div`
  padding: 0.25em;
  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Title = styled.h2`
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 5px;
`;

export const TextBig = styled.div`
  font-weight: 300;
  letter-spacing: 3px;
  padding: 0;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 0.7em;
  margin-top: 0.14em;
  position: relative;
  span {
    margin-bottom: 0.2em;
    margin-left: 0.2em;
  }
`;

export const Options = styled(GlassBox)`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 5%;
  top: 125%;
  z-index: 99;
  width: 100%;
  text-align: center;
  trasition: 1s;
  opacity: ${({ expand }) => (!expand ? 0 : 1)};
  display: ${({ expand }) => (!expand ? 'none' : 'block')};
  cursor: pointer;
  border-radius: 10px;
`;
