import styled from 'styled-components';

import { Colors } from '../../styles/Colors';

export const Container = styled.div`
  max-width: 1120px;
  margin: 6rem auto 0 auto;
`;

export const AddProduct = styled.button`
  border: none;
  background: ${Colors.green};
  width: 12rem;
  height: 2.5rem;
  font-weight: 600;
  color: ${Colors.white};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${Colors.white};
    outline: ${Colors.white};
    margin-left: 1rem;
  }

  :hover {
    filter: brightness(0.85);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`;

export const Th = styled.th`
  background: ${Colors.purple};
  color: ${Colors.white};
  font-weight: 600;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
`;

export const Td = styled.td`
  padding: 1rem 2rem;
  border: 0;
  background: ${Colors.white};
  border-bottom: 1px solid #898e84;
  color: black;
`;

export const EditContainer = styled.div`
  display: inline-flex;
  align-items: center;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  button + button {
    margin-left: 1rem;
  }
`;
