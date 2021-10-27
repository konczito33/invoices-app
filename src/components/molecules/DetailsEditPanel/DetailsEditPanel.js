import Status from 'components/atoms/Status/Status';
import { StyledPanel } from './DetailsEditPanel.styles';
import { Link } from 'react-router-dom';
import { StyledBackButton } from './DetailsEditPanel.styles';
import Chevron from 'assets/chevron-down.svg';
import Button from 'styles/Button/Button';
import { useInvoices } from 'contexts/InvoicesContext';
import { useCurrentInvoice } from 'hooks/useCurrentInvoice';
import { StyledPaidButton } from './DetailsEditPanel.styles';
const DetailsEditPanel = () => {
  const { setIsDeleteModalOpen, dispatch } = useInvoices();
  const { status, id } = useCurrentInvoice();
  return (
    <div>
      <Link
        to="/"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <StyledBackButton>
          <img style={{ transform: 'rotate(90deg)', marginRight: '20px' }} src={Chevron} alt="" />
          Go back
        </StyledBackButton>
      </Link>
      <StyledPanel>
        <p>Status</p>
        <Status status={status} />
        <div className="buttons">
          <Button isWide bgColor={({ theme }) => theme.editBtnBgColor} color={({ theme }) => theme.editBtnColor}>
            Edit
          </Button>
          <Button
            color={({ theme }) => theme.white}
            bgColor={({ theme }) => theme.red}
            isWide
            onClick={() => {
              setIsDeleteModalOpen(true);
            }}
          >
            Delete
          </Button>
          {status !== 'paid' ? (
            <StyledPaidButton
              onClick={() => {
                dispatch({ type: 'markAsPaid', payload: id });
              }}
            >
              Mark as paid
            </StyledPaidButton>
          ) : null}
        </div>
      </StyledPanel>
    </div>
  );
};

export default DetailsEditPanel;
