import styled from 'styled-components';

const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  input {
    font-weight: bold;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid ${({ error }) => (error ? ({ theme }) => theme.red : ({ theme }) => theme.inputBorder)};
    background-color: ${({ theme }) => theme.inputBg};
    transition: 0.3s border, 0.3s background-color, 0.3s color;
    color: ${({ theme }) => theme.mainFontColor};
    &::placeholder {
      color: ${({ theme }) => theme.mainFontColor};
      transition: 0.3s color;
    }
  }
  input:focus {
    border: 1px solid ${({ theme }) => theme.inputOnFocus};
    outline: none;
  }
  label {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fonts.s};
    color: ${({ theme }) => theme.grayFontColor};
    transition: 0.3s color;
  }
`;

export default StyledFormInput;
