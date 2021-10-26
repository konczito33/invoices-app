import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  label {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fonts.s};
    color: ${({ theme }) => theme.grayFontColor};
    transition: 0.3s color;
  }
  select {
    font-weight: bold;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid ${({ error }) => (error ? ({ theme }) => theme.red : ({ theme }) => theme.inputBorder)};
    background-color: ${({ theme }) => theme.inputBg};
    transition: 0.3s border, 0.3s background-color, color 0.3s;
    color: ${({ theme }) => theme.mainFontColor};
    &:focus {
      border: 1px solid ${({ theme }) => theme.inputOnFocus};
      outline: none;
    }
  }
`;

export default function SelectInput({ name, label, options }) {
  const [field] = useField(name);
  return (
    <StyledInputWrapper>
      <label htmlFor={name}>{label}</label>
      <select {...field} name={name} id={name}>
        {options.map(({ value }) => {
          return (
            <option key={value} value={value}>
              Net {value} days
            </option>
          );
        })}
      </select>
    </StyledInputWrapper>
  );
}
