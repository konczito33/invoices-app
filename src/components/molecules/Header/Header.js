import CreatingButton from 'components/atoms/CreatingButton/CreatingButton';
import { useInvoices } from 'contexts/InvoicesContext';
import { StyledHeader } from './Header.styles';
import Dropdown from '../Dropdown/Dropdown';
import useBreakpoints from 'hooks/useBreakpoints';

const headerVariants = {
  from: {
    y: -100,
  },
  to: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
    },
  },
};

const Header = () => {
  const { state, filter } = useInvoices();
  const { filteredInvoices } = state;
  const { isSm, isXs } = useBreakpoints();
  return (
    <StyledHeader isXs={isXs} isSmall={isSm} variants={headerVariants} initial="from" animate="to">
      <div className="invoices-info">
        <h1>Invoices</h1>
        <h2>
          {filteredInvoices.length > 0
            ? `There ${filteredInvoices.length > 1 ? 'are' : 'is'} ${filteredInvoices.length} ${filter === 'null' ? 'total' : filter} invoices`
            : `There are no ${filter === 'null' ? 'total' : filter} invoices`}
        </h2>
      </div>
      <div className="header-buttons">
        <Dropdown />
        <CreatingButton />
      </div>
    </StyledHeader>
  );
};

export default Header;
