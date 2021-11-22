import React from 'react';
import { useField, ErrorMessage } from 'formik';
import StyledFormInput from './FormInput.styles';
import styled from 'styled-components';
const FormInput = ({ label, type = 'text', name, autoComplete = 'off', className, ...rest }) => {
  const [field, meta] = useField(name);
  const { touched, error } = meta;
  return (
    <StyledFormInput className={className} error={error && touched ? true : false}>
      <label htmlFor={name}>{label}</label>
      <input {...field} {...rest} autoComplete={autoComplete} type={type} id={name} />
      <StyledError>
        <ErrorMessage name={name} />
      </StyledError>
    </StyledFormInput>
  );
};

export default FormInput;

const StyledError = styled.div`
  height: 20px;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fonts.s};
  color: ${({ theme }) => theme.red};
`;
