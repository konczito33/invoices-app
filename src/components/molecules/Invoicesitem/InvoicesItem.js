import { useInvoices } from 'contexts/InvoicesContext';
import { NavLink } from 'react-router-dom';
import { StyledItem } from './InvoicesItem.styles';
import Status from 'components/atoms/Status/Status';
import Chevron from 'assets/chevron-down.svg';

const itemVariants = {
  from: {
    opacity: 0,
    y: -100,
  },
  to: {
    opacity: 1,
    y: 0,
  },
};

const InvoicesItem = ({ item }) => {
  const { setCurrentInvoice } = useInvoices();
  const { id, paymentDue, clientName, total, status } = item;
  return (
    <NavLink style={{ textDecoration: 'none', color: 'unset' }} to={`/invoices/${id}`}>
      <StyledItem
        variants={itemVariants}
        onClick={() => {
          setCurrentInvoice(item);
          window.scrollTo(0, 0);
        }}
        status={status}
      >
        <h3 className="id">
          <span>#</span>
          {id}
        </h3>
        <p className="due">
          {paymentDue ? 'Due' : ''} {paymentDue}
        </p>
        <p className="name">{clientName}</p>
        <p className="total">
          {total ? '$' : ''}
          {total}
        </p>
        <Status status={status} />
        <img src={Chevron} alt="" />
      </StyledItem>
    </NavLink>
  );
};

export default InvoicesItem;
