import React from 'react';
import styled from 'styled-components';
import { StyledButton } from 'styles/Button/Button';
const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const StyledCancelButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.editBtnBgColor};
  color: ${({ theme }) => theme.editBtnColor};
  padding: 15px 25px;
`;
const StyledSaveButton = styled(StyledButton)`
  background-color: rgb(124, 93, 250);
  color: #fff;
  padding: 15px 25px;
`;

export default function EditFormButtons({ closeModal }) {
  return (
    <StyledButtonsWrapper>
      <StyledCancelButton onClick={closeModal}>Cancel</StyledCancelButton>
      <StyledSaveButton type="submit">Save Changes</StyledSaveButton>
    </StyledButtonsWrapper>
  );
}
