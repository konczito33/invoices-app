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
import EditInvoiceModal from 'components/molecules/EditInvoiceModal/EditInvoiceModal';
import { AnimatePresence } from 'framer-motion';
function App() {
  return (
    <ThemeContextProvider>
      <InvoicesProvider>
        <GlobalStyles isCreateModalOpen={true} />
        <Router>
          <Switch>
            <Template>
              <AnimatePresence>
                <Route exact path="https://konczito33.github.io/invoices-app/">
                  <Invoices />
                  <CreateInvoiceModal />
                </Route>
              </AnimatePresence>
              <Route path="https://konczito33.github.io/invoices-app/invoices/:id">
                <InvoiceDetails />
                <AnimatePresence>
                  <EditInvoiceModal />
                </AnimatePresence>
              </Route>
            </Template>
          </Switch>
        </Router>
      </InvoicesProvider>
    </ThemeContextProvider>
  );
}

export default App;
