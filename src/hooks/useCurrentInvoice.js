import { useInvoices } from 'contexts/InvoicesContext';
import { useHistory } from 'react-router';
export const useCurrentInvoice = () => {
  let history = useHistory();
  const location = history.location;
  const id = location.pathname.slice(10, 16);
  const { state } = useInvoices();
  const { filteredInvoices } = state;
  const currentInvoice = filteredInvoices.filter((item) => item.id === id)[0];
  return currentInvoice;
};
