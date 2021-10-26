import { StyledDropdownItem } from './DropdownItem.styles';
export const DropdownItem = ({ checked, onChange, type, id }) => {
  return (
    <StyledDropdownItem>
      <input
        type="checkbox"
        onChange={() => {
          onChange(id, type);
        }}
        checked={checked}
        id={type}
      />
      <label htmlFor={type}>{type}</label>
    </StyledDropdownItem>
  );
};
