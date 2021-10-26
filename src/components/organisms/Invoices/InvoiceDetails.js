import Wrapper from 'templates/Wrapper';
import { useCurrentInvoice } from 'hooks/useCurrentInvoice';
import DetailsEditPanel from 'components/molecules/DetailsEditPanel/DetailsEditPanel';
import DetailsInfo from 'components/molecules/DetailsInfo/DetailsInfo';
import DeleteInvoiceModal from 'components/molecules/DeleteInvoiceModal/DeleteInvoiceModal';

const InvoiceDetails = () => {
  const { status } = useCurrentInvoice();
  return (
    <Wrapper style={{ width: '600px' }}>
      <nav>
        <DetailsEditPanel status={status} />
      </nav>
      <DetailsInfo />
      <DeleteInvoiceModal />
    </Wrapper>
  );
};

export default InvoiceDetails;
