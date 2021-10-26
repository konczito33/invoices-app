import * as React from 'react';

import { useLocalStorage } from 'hooks/useLocalStorage';

import data from 'data/data.json';

export const InvoicesContext = React.createContext();
const initialState = { invoices: data, filteredInvoices: data };

export const InvoicesProvider = ({ children }) => {
  const reducer = (state, action) => {
    const { invoices } = state;
    const { payload } = action;

    switch (action.type) {
      case 'pending':
        const pendingArr = invoices.filter((item) => item.status === 'pending');
        return { ...state, filteredInvoices: pendingArr };
      case 'paid':
        const paidArr = invoices.filter((item) => item.status === 'paid');
        return { ...state, filteredInvoices: paidArr };
      case 'draft':
        const draftArr = invoices.filter((item) => item.status === 'draft');
        return { ...state, filteredInvoices: draftArr };
      case 'newInvoice':
        const newArr = [payload, ...invoices];
        return { ...state, invoices: newArr, filteredInvoices: newArr };
      case 'deleteInvoice':
        const arr = invoices.filter((item) => item.id !== payload);
        return { ...state, invoices: arr, filteredInvoices: arr };
      case 'null':
        return { ...state, filteredInvoices: invoices };
      default:
        throw new Error(`${action.type} it should be imposible`);
    }
  };
  const initOptions = [
    { type: 'paid', checked: false, id: 0 },
    { type: 'pending', checked: false, id: 1 },
    { type: 'draft', checked: false, id: 2 },
  ];
  const [options, setOptions] = React.useState(initOptions);
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('null');
  const [currentInvoice, setCurrentInvoice] = React.useState(null);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  return (
    <InvoicesContext.Provider
      value={{
        dispatch,
        state,
        currentInvoice,
        setCurrentInvoice,
        options,
        setOptions,
        filter,
        setFilter,
        isCreateModalOpen,
        setIsCreateModalOpen,
        isDeleteModalOpen,
        setIsDeleteModalOpen,
      }}
    >
      {children}
    </InvoicesContext.Provider>
  );
};

export const useInvoices = () => {
  const context = React.useContext(InvoicesContext);
  return context;
};
