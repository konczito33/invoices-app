import Button from '../../../styles/Button/Button';
import Add from 'assets/add.svg';
import Center from 'styles/Center/Center';
import { StyledIconContainer } from './CreatingButton.styles';
import { useInvoices } from 'contexts/InvoicesContext';
const CreatingButton = () => {
  const { setIsCreateModalOpen, isCreateModalOpen } = useInvoices();
  const handleModalOpen = () => setIsCreateModalOpen(!isCreateModalOpen);
  return (
    <Center>
      <Button
        onClick={handleModalOpen}
        on
        isBig
        bgColor={({ theme }) => theme.purple}
        color="#fff"
      >
        <StyledIconContainer>
          <img src={Add} alt="" />
        </StyledIconContainer>
        <span>New Invoice</span>
      </Button>
    </Center>
  );
};

export default CreatingButton;
