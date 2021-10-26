import React from 'react';
import { useFormikContext, useField } from 'formik';
import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';
import calendar from 'assets/icon-calendar.svg';

const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fonts.s};
  color: ${({ theme }) => theme.grayFontColor};
  transition: 0.3s color;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
const StyledButton = styled.button`
  width: 100%;
  font-weight: bold;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid ${({ error }) => (error ? ({ theme }) => theme.red : ({ theme }) => theme.inputBorder)};
  background-color: ${({ theme }) => theme.inputBg};
  transition: 0.3s border, 0.3s background-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.mainFontColor};

  &:focus {
    border: 1px solid ${({ theme }) => theme.inputOnFocus};
    outline: none;
  }
`;

const Button = React.forwardRef(({ value, onClick }, ref) => (
  <StyledButton type="button" onClick={onClick} ref={ref}>
    <span>{value}</span>
    <img src={calendar} alt="" />
  </StyledButton>
));

export function DatePicker({ name, label }) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <ReactDatePicker {...field} id={name} customInput={<Button />} dateFormat="MMM d, yyyy" selected={field.value} onChange={(value) => setFieldValue(name, value)} />
    </StyledWrapper>
  );
}
