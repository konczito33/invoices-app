import React from 'react';

import styled from 'styled-components';
import { StyledButton } from 'styles/Button/Button';

import { formatDate } from 'utils/utils';
import { generateId } from 'utils/utils';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 100%;
`;

const StyledDiscardButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.discardBtn};
  padding: 15px 25px;
  @media (max-width: 769px) {
    padding: 12px 8px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.discardBtnHover};
  }
`;
const StyledDraftButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.draftBtnBg};
  padding: 15px 25px;
  @media (max-width: 769px) {
    padding: 12px 8px;
  }
`;
const StyledSaveButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.purple};
  padding: 15px 25px;
  @media (max-width: 769px) {
    padding: 12px 8px;
  }
`;

export default function FormButtons({ dispatch, isSubmitting, closeModal, values }) {
  return (
    <StyledWrapper>
      <StyledDiscardButton color={({ theme }) => theme.discardBtnColor} onClick={closeModal}>
        Discard
      </StyledDiscardButton>
      <StyledButtonsWrapper>
        <StyledDraftButton
          color={({ theme }) => theme.grayFontColor}
          onClick={() => {
            closeModal();
            dispatch({ type: 'newInvoice', payload: { ...values, createdAt: formatDate(values.createdAt), status: 'draft', id: generateId() } });
          }}
        >
          Save as Draft
        </StyledDraftButton>
        <StyledSaveButton autoFocus={true} color="#fff" type="submit" disabled={isSubmitting}>
          Save & Send
        </StyledSaveButton>
      </StyledButtonsWrapper>
    </StyledWrapper>
  );
}
