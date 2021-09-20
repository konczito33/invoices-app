import React from 'react';

import { useInvoices } from 'contexts/InvoicesContext';
import InvoicesItem from 'components/molecules/Invoicesitem/InvoicesItem';

const InvoicesList = () => {
  const { state, dispatch } = useInvoices();
  const { invoices } = state;
  const removeItemHandler = () =>
    dispatch({
      type: 'REMOVE_ITEM',
      payload: 'FV2353',
    });
  return (
    <div>
      <ul>
        <button onClick={removeItemHandler}>REMOVE</button>
        {invoices.map((item) => {
          return <InvoicesItem item={item}></InvoicesItem>;
        })}
      </ul>
    </div>
  );
};

export default InvoicesList;
