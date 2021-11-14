import React from 'react';
import { useInvoices } from 'contexts/InvoicesContext';
import styled from 'styled-components';
import { StyledOverlay as overlay } from 'components/atoms/DarkOverlay/DarkOverlay.styles';
import EditInvoiceForm from '../EditInvoiceForm/EditInvoiceForm';
const StyledOverlay = styled(overlay)`
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

export default function EditInvoiceModal() {
  const { isEditModalOpen, setIsEditModalOpen } = useInvoices();

  React.useEffect(() => {
    const body = document.body;
    isEditModalOpen ? (body.style.overflow = 'hidden') : (body.style.overflow = 'unset');
  }, [isEditModalOpen]);

  const closeModalHandler = () => {
    setIsEditModalOpen(false);
  };
  if (!isEditModalOpen) return null;
  return (
    <div>
      <StyledOverlay onClick={closeModalHandler} />
      <EditInvoiceForm setIsEditModalOpen={setIsEditModalOpen} />
    </div>
  );
}
