import FilterButton from 'components/atoms/FilterButton/FilterButton';
import CreatingButton from 'components/atoms/CreatingButton/CreatingButton';
import { useInvoices } from 'contexts/InvoicesContext';
import { StyledHeader } from './Header.styles';
const Header = () => {
  const { state } = useInvoices();
  const { invoices } = state;
  return (
    <StyledHeader>
      <div className="invoices-info">
        <h1>Invoices</h1>
        <h2>There are {invoices.length} total invoices.</h2>
      </div>
      <div className="header-buttons">
        <FilterButton />
        <CreatingButton />
      </div>
    </StyledHeader>
  );
};

export default Header;
