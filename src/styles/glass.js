import styled from 'styled-components/macro';

export const glassBg = `background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(3px);
box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);`;

export const GlassBox = styled.div`
  ${glassBg}
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
`;
export const GlassDiv = styled.div`
  ${glassBg}
`;
