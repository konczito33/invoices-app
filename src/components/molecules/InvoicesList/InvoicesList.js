import React from 'react';

import { useInvoices } from 'contexts/InvoicesContext';
import InvoicesItem from 'components/molecules/Invoicesitem/InvoicesItem';
import { StyledList } from './InvoicesList.styles';

import Center from 'styles/Center/Center';
import { AnimatePresence } from 'framer-motion';

const listVariants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const InvoicesList = () => {
  const { state } = useInvoices();
  const { filteredInvoices } = state;
  return (
    <AnimatePresence>
      <Center>
        <StyledList variants={listVariants} initial="from" animate="to" key="list">
          {filteredInvoices.map((item) => {
            return <InvoicesItem key={item.id} item={item}></InvoicesItem>;
          })}
        </StyledList>
      </Center>
    </AnimatePresence>
  );
};

export default InvoicesList;
