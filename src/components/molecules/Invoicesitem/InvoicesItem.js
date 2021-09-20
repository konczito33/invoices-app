import { useInvoices } from 'contexts/InvoicesContext';
import { NavLink } from 'react-router-dom';

const InvoicesItem = ({ item }) => {
  const { dispatch, setCurrentInvoice } = useInvoices();
  const removeItemHandler = () =>
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  const { id } = item;
  return (
    <NavLink to={`/`}>
      {id}
      <button
        onClick={() => {
          removeItemHandler();
        }}
      >
        Remove
      </button>
      <button
        onClick={() => {
          setCurrentInvoice(item);
        }}
      >
        Add
      </button>
    </NavLink>
  );
};

export default InvoicesItem;
