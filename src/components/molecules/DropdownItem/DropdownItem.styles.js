import styled from 'styled-components';

export const StyledDropdownItem = styled.li`
  display: flex;
  align-items: center;

  input {
    margin-right: 16px;
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.checkboxBg};
    border: 1px solid transparent;
    transition: border 0.3s, background-color 0.3s;
    cursor: pointer;
    &:checked {
      background-color: ${({ theme }) => theme.purple};
      border: 1px solid transparent;
    }
    &:hover {
      border: 1px solid ${({ theme }) => theme.purple};
    }
  }
  label {
    text-transform: capitalize;
    font-weight: bold;
  }
`;
