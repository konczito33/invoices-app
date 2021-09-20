import Wrapper from 'templates/Wrapper';
import InvoicesList from 'components/molecules/InvoicesList/InvoicesList';
import Header from 'components/molecules/Header/Header';
const Invoices = () => {
  return (
    <Wrapper>
      <Header />
      <InvoicesList />
    </Wrapper>
  );
};

export default Invoices;
