import React from 'react';
import onClickOutside from 'react-onclickoutside';
import { useRef } from 'react';
import FilterButton from 'components/atoms/FilterButton/FilterButton';
import { StyledDropdown } from './Dropdown.styles';
import { useInvoices } from 'contexts/InvoicesContext';
import { DropdownItem } from '../DropdownItem/DropdownIem';
function Dropdown() {
  const { dispatch, options, setOptions, setFilter, filter } = useInvoices();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = useRef(null);
  const toggleHandler = () => setIsOpen(!isOpen);
  Dropdown.handleClickOutside = () => setIsOpen(false);

  const onInputChangeHandler = (id, type) => {
    setOptions(
      options.map((option) => {
        if (id === option.id) {
          setFilter(option.checked ? 'null' : type);
          return { ...option, checked: !option.checked };
        }
        return { ...option, checked: false };
      }),
    );
  };
  React.useEffect(() => {
    dispatch({ type: filter });
  }, [filter, dispatch]);

  return (
    <StyledDropdown>
      <FilterButton isOpen={isOpen} ref={dropdownRef} onClick={toggleHandler} />
      {isOpen ? (
        <ul>
          {options.map(({ type, checked, id }) => (
            <DropdownItem
              key={type}
              type={type}
              onChange={onInputChangeHandler}
              checked={checked}
              id={id}
            />
          ))}
        </ul>
      ) : null}
    </StyledDropdown>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
