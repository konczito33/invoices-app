import { useCurrentInvoice } from 'hooks/useCurrentInvoice';
import { StyledDetails } from './DetailsInfo.styles';
const DetailsInfo = () => {
  const { description, id, createdAt, paymentDue, total, clientAddress, clientName, senderAddress, clientEmail, items } = useCurrentInvoice();
  const { city, country, postCode, street } = clientAddress;
  const { city: cityS, country: countryS, postCode: postCodeS, street: streetS } = senderAddress;
  return (
    <StyledDetails>
      <div className="top">
        <div>
          <h3 className="id">
            <span>#</span>
            {id}
          </h3>
          <p>{description}</p>
        </div>
        <div className="sender-adress">
          <p>{cityS}</p>
          <p>{countryS}</p>
          <p>{postCodeS}</p>
          <p>{streetS}</p>
        </div>
      </div>
      <div className="mid">
        <div className="dates">
          <div>
            <p>Invoice date</p>
            <strong>{createdAt}</strong>
          </div>
          <div>
            <p>Payment due</p>
            <strong>{paymentDue}</strong>
          </div>
        </div>
        <div className="person-info">
          <p>Bill to</p>
          <strong>{clientName}</strong>
          <p>{city}</p>
          <p>{country}</p>
          <p>{postCode}</p>
          <p>{street}</p>
        </div>
        <div>
          <p>Sent to</p>
          <a href={`mailto:${clientEmail}`}>
            <strong>{clientEmail}</strong>
          </a>
        </div>
      </div>
      <div className="bottom">
        <table>
          <tr>
            <th style={{ textAlign: 'left' }}>Item Name</th>
            <th className="t-qty">QTY.</th>
            <th className="t-price">Price</th>
            <th style={{ textAlign: 'right' }}>Total</th>
          </tr>
          {items.map(({ name, price, quantity, total }) => (
            <tr key={total}>
              <td className="t-name"> {name}</td>
              <td className="t-qty">{quantity}</td>
              <td className="t-price">${price}</td>
              <td className="t-total">${total}</td>
            </tr>
          ))}
        </table>
        <tfoot className="footer">
          <tr className="tr">
            <th>Amount Due</th>
            <td>
              {total ? '$' : ''}
              {total}
            </td>
          </tr>
        </tfoot>
      </div>
    </StyledDetails>
  );
};

export default DetailsInfo;
