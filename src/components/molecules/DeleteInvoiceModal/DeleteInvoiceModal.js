import React from 'react';
import ReactDOM from 'react-dom';

import Button, { StyledButton } from 'styles/Button/Button';

import { useHistory } from 'react-router';
import { useInvoices } from 'contexts/InvoicesContext';

import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000083;
  z-index: 10;
`;

const StyledWrapper = styled.div`
  position: absolute;
  display: grid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: ${({ theme }) => theme.itemColor};
  height: 220px;
  width: 450px;
  padding: 35px 45px;
  border-radius: 10px;
`;
const StyledHeader = styled.h3`
  color: ${({ theme }) => theme.mainFontColor};
  font-weight: bold;
  font-size: 28px;
  font-family: 'Spartan', sans-serif;
  margin: 0 0 30px 0;
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.grayFontColor};
  font-size: ${({ theme }) => theme.fonts.s};
  line-height: 140%;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  button {
    padding: 12px 18px;
  }
`;

const StyledCancelButton = styled(Button)`
  font-weight: bold;
  background-color: ${({ theme }) => theme.editBtnBgColor};
  color: ${({ theme }) => theme.discardBtnColor};
`;
const StyledConfirmButton = styled(Button)`
  background-color: ${({ theme }) => theme.red};
  color: #fff;

  font-weight: bold;
  margin-left: 20px;
`;

export default function DeleteInvoiceModal() {
  let history = useHistory();
  const location = history.location;
  const id = location.pathname.slice(10, 16);
  const { isDeleteModalOpen, setIsDeleteModalOpen, dispatch } = useInvoices();
  const closeModalHandler = () => {
    setIsDeleteModalOpen(false);
  };
  const deleteInvoiceHandler = () => {
    dispatch({ type: 'deleteInvoice', payload: id });
    history.push('/');

    closeModalHandler();
  };
  React.useEffect(() => {
    const body = document.body;
    isDeleteModalOpen ? (body.style.overflow = 'hidden') : (body.style.overflow = 'unset');
  }, [isDeleteModalOpen]);
  if (!isDeleteModalOpen) return null;

  return ReactDOM.createPortal(
    <>
      <StyledOverlay />
      <StyledWrapper>
        <div>
          <StyledHeader>Confirm Deletation</StyledHeader>
          <StyledParagraph>Are you sure you want to delete invoice {id}? This action cannot be undone.</StyledParagraph>
        </div>
        <StyledButtonsWrapper>
          <StyledCancelButton onClick={closeModalHandler}>Cancel</StyledCancelButton>
          <StyledConfirmButton onClick={deleteInvoiceHandler}>Confirm</StyledConfirmButton>
        </StyledButtonsWrapper>
      </StyledWrapper>
    </>,
    document.getElementById('delete-invoice-modal'),
  );
}
