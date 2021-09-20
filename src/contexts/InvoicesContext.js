import * as React from 'react';
import data from 'data/data.json';
export const InvoicesContext = React.createContext();
const initialState = { invoices: data };

export const InvoicesProvider = ({ children }) => {
  const reducer = (state, action) => {
    const { payload } = action;
    const { invoices } = state;
    switch (action.type) {
      case 'FETCH':
        return { ...state, invoices: action.payload };
      case 'REMOVE_ITEM':
        const filteredArray = invoices.filter((item) => item.id !== payload);
        return { invoices: filteredArray };
      default:
        throw new Error(`it should be imposible`);
    }
  };
  const [currentInvoice, setCurrentInvoice] = React.useState(null);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <InvoicesContext.Provider
      value={{ dispatch, state, currentInvoice, setCurrentInvoice }}
    >
      {children}
    </InvoicesContext.Provider>
  );
};

export const useInvoices = () => {
  const context = React.useContext(InvoicesContext);
  return context;
};
