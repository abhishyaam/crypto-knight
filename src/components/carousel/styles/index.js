import styled from 'styled-components/macro';
import { glassBg } from '../../../styles/glass';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1100px;
  overflow: hidden;
  margin-top: 2em;
`;

export const Inner = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  ${glassBg};
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.1%;
  height: 12em;
  border-radius: 10px;
  min-width: 22.55%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 20px 30px rgba(0, 0, 0.1em, 0.1);
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin: 1em;
  font-size: 1.2em;
  font-weight: 400;
  letter-spacing: 4px;
`;

export const Icon = styled.img`
  width: 50%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
  font-size: 0.8em;
  width: 100%;
  font-weight: 800;
`;
