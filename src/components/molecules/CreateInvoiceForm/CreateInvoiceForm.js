import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import { StyledInvoiceFormWrapper } from './CreateInvoiceForm.styles';
import { StyledTemplate } from './CreateInvoiceForm.styles';
import { StyledFormContainer } from './CreateInvoiceForm.styles';
import { StyledPaymentRow } from './CreateInvoiceForm.styles';
import { StyledRow } from './CreateInvoiceForm.styles';

import { Formik } from 'formik';
import { validationSchema } from 'form/formObjects';
import { options } from 'form/formObjects';
import { formatDate, generateId } from 'utils/utils';
import { useInvoices } from 'contexts/InvoicesContext';
import { initialValue } from 'form/formObjects';
import { AnimatePresence, motion } from 'framer-motion';
import { getTotal } from 'utils/utils';

import { DatePicker as CustomDatePicker } from 'components/atoms/DatePicker/DatePicker';
import FormInput from '../FormInput/FormInput';
import SelectInput from 'components/atoms/SelectInput/SelectInput';
import FormButtons from '../FormButtons/FormButtons';
import ItemsInput from '../ItemsInput/ItemsInput';

export default function CreateInvoiceForm({ setIsCreateModalOpen }) {
  const { dispatch } = useInvoices();

  const submitHandler = (invoice) => {
    dispatch({ type: 'newInvoice', payload: invoice });
  };
  const closeModal = () => {
    setIsCreateModalOpen();
  };

  return (
    <AnimatePresence>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          closeModal();
          submitHandler({
            ...values,
            createdAt: formatDate(values.createdAt),
            paymentDue: formatDate(values.createdAt.getTime() + 86400000 * values.paymentTerms),
            id: generateId(),
            total: getTotal(values.items),
          });
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => {
          return (
            <StyledInvoiceFormWrapper action="#" onSubmit={handleSubmit}>
              <StyledTemplate>
                <h2>Create Invoice</h2>
                <StyledFormContainer>
                  <h3>Bill From</h3>
                  <FormInput label="Street Address" name="senderAddress.street" />
                  <StyledRow>
                    <FormInput label="City" name="senderAddress.city" />
                    <FormInput label="Post Code" name="senderAddress.postCode" />
                    <FormInput label="Country" name="senderAddress.country" />
                  </StyledRow>
                  <h3>Bill To</h3>
                  <FormInput label="Client's Name" name="clientName" />
                  <FormInput label="Client's Email" name="clientEmail" placeholder="e.g email@example.com" />
                  <FormInput label="Street Address" name="clientAddress.street" />
                  <StyledRow>
                    <FormInput label="City" name="clientAddress.city" />
                    <FormInput label="Post Code" name="clientAddress.postCode" />
                    <FormInput label="Country" name="clientAddress.country" />
                  </StyledRow>
                  <StyledPaymentRow>
                    <CustomDatePicker label="Invoice Date" name="createdAt" />
                    <SelectInput name="paymentTerms" label="Payment Terms" options={options} />
                  </StyledPaymentRow>
                  <FormInput label="Description" name="description" placeholder="e.g Graphic Design Service" />
                  <ItemsInput values={values} />
                </StyledFormContainer>
                <FormButtons dispatch={dispatch} closeModal={closeModal} isSubmitting={isSubmitting} values={values} />
              </StyledTemplate>
            </StyledInvoiceFormWrapper>
          );
        }}
      </Formik>
    </AnimatePresence>
  );
}
