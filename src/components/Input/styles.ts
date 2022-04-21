import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-flex;

  border: 1px solid black;

  > input {
    border: none;
    outline: none;
    padding-left: 8px;
  }

  input:focus {
    ::placeholder {
      color: transparent;
    }
  }
`;
