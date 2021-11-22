import React from 'react';
import styled from 'styled-components';
import Button from 'styles/Button/Button';
import { useInvoices } from 'contexts/InvoicesContext';
const StyledEditButtons = styled.div`
  background-color: ${({ theme }) => theme.itemColor};
  margin-top: 20px;

  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
`;

export default function DetailsEditButtons() {
  const { setIsDeleteModalOpen } = useInvoices();
  const { setIsEditModalOpen } = useInvoices();
  const handleOpenEditModal = () => setIsEditModalOpen(true);
  return (
    <StyledEditButtons>
      <Button onClick={handleOpenEditModal} isWide bgColor={({ theme }) => theme.editBtnBgColor} color={({ theme }) => theme.editBtnColor}>
        Edit
      </Button>
      <Button
        color={({ theme }) => theme.white}
        bgColor={({ theme }) => theme.red}
        isWide
        onClick={() => {
          setIsDeleteModalOpen(true);
        }}
      >
        Delete
      </Button>
    </StyledEditButtons>
  );
}
