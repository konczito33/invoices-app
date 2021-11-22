import Center from 'styles/Center/Center';
import Button from 'styles/Button/Button';
import Chevron from 'assets/chevron-down.svg';
import useBreakpoints from 'hooks/useBreakpoints';
const FilterButton = (props) => {
  const { isSm } = useBreakpoints();
  return (
    <Center>
      <Button {...props} bgColor="transparent" color={({ theme }) => theme.mainFontColor}>
        <span>{isSm ? 'Filter' : 'Filter by status'} </span>
        <span>
          <img style={{ transform: `rotate(${props.isOpen ? 180 : 0}deg)` }} src={Chevron} alt="" />
        </span>
      </Button>
    </Center>
  );
};

export default FilterButton;
