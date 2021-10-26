import React from 'react';
import ReactDOM from 'react-dom';
import { useInvoices } from 'contexts/InvoicesContext';
import CreateInvoiceForm from 'components/molecules/CreateInvoiceForm/CreateInvoiceForm';
import { StyledOverlay } from 'components/atoms/DarkOverlay/DarkOverlay.styles';
export default function CreateInvoiceModal() {
  const { isCreateModalOpen, setIsCreateModalOpen } = useInvoices();

  React.useEffect(() => {
    const body = document.body;
    isCreateModalOpen ? (body.style.overflow = 'hidden') : (body.style.overflow = 'unset');
  }, [isCreateModalOpen]);

  const closeModalHandler = () => {
    setIsCreateModalOpen(false);
  };
  if (!isCreateModalOpen) return null;
  return ReactDOM.createPortal(
    <>
      <StyledOverlay onClick={closeModalHandler} className="overlay"></StyledOverlay>
      <CreateInvoiceForm setIsCreateModalOpen={setIsCreateModalOpen} />
    </>,
    document.getElementById('create-invoice-modal'),
  );
}
