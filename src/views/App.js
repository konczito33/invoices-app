import React from 'react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { InvoicesProvider } from 'contexts/InvoicesContext';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Invoices from 'components/organisms/Invoices/Invoices';
import Template from 'templates/Template';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import InvoiceDetails from 'components/organisms/Invoices/InvoiceDetails';
import CreateInvoiceModal from 'components/organisms/Invoices/CreateInvoiceModal/CreateInvoiceModal';
function App() {
  return (
    <ThemeContextProvider>
      <InvoicesProvider>
        <GlobalStyles isCreateModalOpen={true} />
        <Router>
          <Switch>
            <Template>
              <Route exact path="/">
                <Invoices />
                <CreateInvoiceModal />
              </Route>
              <Route path="/invoices/:id">
                <InvoiceDetails />
              </Route>
            </Template>
          </Switch>
        </Router>
      </InvoicesProvider>
    </ThemeContextProvider>
  );
}

export default App;
