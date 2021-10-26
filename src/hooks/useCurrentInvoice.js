import { useParams } from 'react-router';
import { useInvoices } from 'contexts/InvoicesContext';
export const useCurrentInvoice = () => {
  const { id } = useParams();
  const { state } = useInvoices();
  const { filteredInvoices } = state;
  const currentInvoice = filteredInvoices.filter((item) => item.id === id)[0];
  return currentInvoice;
};
