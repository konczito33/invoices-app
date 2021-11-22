import React from 'react';

import { FieldArray } from 'formik';
import { generateId } from 'utils/utils';
import Button from 'styles/Button/Button';
import Item from 'components/atoms/Item/Item';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.itemsButton};
  color: ${({ theme }) => theme.grayFontColor};
`;

const StyledHeader = styled.h3`
  padding: 10px 0;
`;

const StyledWrapper = styled.div`
  background-color: red;
  display: grid;
`;

export default function ItemsInput({ values, index }) {
  return (
    <div>
      <StyledHeader>ItemList</StyledHeader>
      <FieldArray name="items">
        {({ push, remove }) => (
          <div>
            {values.items.map((val, i) => (
              <Item key={i} i={i} remove={remove} />
            ))}
            <StyledButton
              onClick={() => {
                push({ id: generateId(), name: '', qty: '', price: '' });
              }}
              type="button"
            >
              + Add New Item
            </StyledButton>
          </div>
        )}
      </FieldArray>
    </div>
  );
}
