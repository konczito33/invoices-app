import styled from 'styled-components';
import { Form } from 'formik';

export const StyledInvoiceFormWrapper = styled(Form)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.invoiceModalColor};
  width: 750px;
  padding-left: 100px;
  border-radius: 20px;
  height: 100vh;
  z-index: 10;
  transition: 0.3s background-color;
  @media (max-width: 1025px) {
    width: 100%;
    padding: 50px 0 0 0;
  }
`;

export const StyledTemplate = styled.div`
  height: 100%;
  display: grid;
  align-content: space-between;
  grid-template-rows: min-content 1fr min-content;
  padding: 40px 20px 40px 40px;
  h2 {
    color: ${({ theme }) => theme.mainFontColor};
    transition: 0.3s color;
  }
`;

export const StyledFormContainer = styled.div`
  margin: 20px 0;
  padding-right: 50px;
  overflow-y: scroll;
  flex: 0.7;
  h3 {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fonts.s};
    color: ${({ theme }) => theme.purple};
  }

  @media (max-width: 1025px) {
    padding-right: 0px;
  }
  .buttons {
    height: 70px;
    display: flex;
    align-items: center;
  }
`;

export const StyledPaymentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 150px;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    input {
      width: 100%;
    }
  }
`;
