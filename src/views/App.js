import React from 'react';
import { GlobalStyles } from 'styles/GlobalStyles';
import { InvoicesProvider } from 'contexts/InvoicesContext';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Invoices from 'components/organisms/Invoices/Invoices';
import Template from 'templates/Template';
import { ThemeContextProvider } from 'contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <InvoicesProvider>
        <GlobalStyles />
        <Router>
          <Switch>
            <Template>
              <Route exact path="/">
                <Invoices />
              </Route>
            </Template>
          </Switch>
        </Router>
      </InvoicesProvider>
    </ThemeContextProvider>
  );
}

export default App;
