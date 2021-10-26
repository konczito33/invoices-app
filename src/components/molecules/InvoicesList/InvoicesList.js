import React from 'react';

import { useInvoices } from 'contexts/InvoicesContext';
import InvoicesItem from 'components/molecules/Invoicesitem/InvoicesItem';
import { StyledList } from './InvoicesList.styles';

import Center from 'styles/Center/Center';
const InvoicesList = () => {
  const { state, dispatch } = useInvoices();
  const { filteredInvoices } = state;
  return (
    <Center>
      <StyledList>
        {filteredInvoices.map((item) => {
          return <InvoicesItem key={item.id} item={item}></InvoicesItem>;
        })}
      </StyledList>
    </Center>
  );
};

export default InvoicesList;
