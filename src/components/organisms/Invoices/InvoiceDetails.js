import Wrapper from 'templates/Wrapper';
import { useCurrentInvoice } from 'hooks/useCurrentInvoice';
import DetailsEditPanel from 'components/molecules/DetailsEditPanel/DetailsEditPanel';
import DetailsInfo from 'components/molecules/DetailsInfo/DetailsInfo';
import DeleteInvoiceModal from 'components/molecules/DeleteInvoiceModal/DeleteInvoiceModal';
import useBreakpoints from 'hooks/useBreakpoints';
import DetailsEditButtons from 'components/atoms/DetailsEditButtons/DetailsEditButtons';
const InvoiceDetails = () => {
  const { status } = useCurrentInvoice();
  const { isSm, isMd } = useBreakpoints();
  return (
    <Wrapper style={{ width: '600px' }}>
      <nav>
        <DetailsEditPanel status={status} />
      </nav>
      <DetailsInfo />
      <DeleteInvoiceModal />
      {isMd || isSm ? <DetailsEditButtons /> : null}
    </Wrapper>
  );
};

export default InvoiceDetails;
