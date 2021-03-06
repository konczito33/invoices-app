import React from 'react';
import FormInput from 'components/molecules/FormInput/FormInput';
import { useFormikContext } from 'formik';
import Delete from 'assets/icon-delete.svg';
import styled from 'styled-components';

const StyledItemWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 150px repeat(3, 70px);
  justify-content: space-between;
  @media (max-width: 769px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 30px 100px 100px;
    .item-qty {
      grid-column: 1/2;
    }
    .item-name {
      grid-column: 1/6;
      width: 100%;
    }
  }
`;

const StyledButton = styled.button`
  width: 100%;
  grid-column: -1;
  border: none;
  background-color: transparent;
  cursor: pointer;
  height: 40px;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

export default function Item({ i, remove }) {
  const { values, setFieldValue } = useFormikContext();
  React.useEffect(() => {
    const currentItem = values.items[i];
    const { price, qty } = currentItem;
    const total = price * qty;
    setFieldValue(`items[${i}].total`, total);
  }, [values, i, setFieldValue]);
  return (
    <StyledItemWrapper>
      <FormInput className="item-name" label={'Name'} name={`items[${i}].name`} />
      <FormInput className="item-qty" label={'Qty'} name={`items[${i}].qty`} />
      <FormInput className="item-price" label={'Price'} name={`items[${i}].price`} />
      <FormInput className="item-total" disabled label={'total'} name={`items[${i}].total`} />
      <StyledButton onClick={() => remove(i)} type="button">
        <img src={Delete} alt="" />
      </StyledButton>
    </StyledItemWrapper>
  );
}
