import styled from 'styled-components';

import { Colors } from '../../styles/Colors';

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
