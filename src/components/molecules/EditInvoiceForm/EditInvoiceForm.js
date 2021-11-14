import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import { StyledInvoiceFormWrapper } from '../CreateInvoiceForm/CreateInvoiceForm.styles';
import { StyledTemplate } from '../CreateInvoiceForm/CreateInvoiceForm.styles';
import { StyledFormContainer } from '../CreateInvoiceForm/CreateInvoiceForm.styles';
import { StyledPaymentRow } from '../CreateInvoiceForm/CreateInvoiceForm.styles';
import { StyledRow } from '../CreateInvoiceForm/CreateInvoiceForm.styles';

import { Formik } from 'formik';
import { validationSchema } from 'form/formObjects';
import { options } from 'form/formObjects';
import { formatDate } from 'utils/utils';
import { useInvoices } from 'contexts/InvoicesContext';
import { useCurrentInvoice } from 'hooks/useCurrentInvoice';
import { getTotal } from 'utils/utils';

import { DatePicker as CustomDatePicker } from 'components/atoms/DatePicker/DatePicker';
import FormInput from '../FormInput/FormInput';
import SelectInput from 'components/atoms/SelectInput/SelectInput';
import FormButtons from '../FormButtons/FormButtons';
import EditFormButtons from '../EditFormButtons/EditFormButtons';
import ItemsInput from '../ItemsInput/ItemsInput';

export default function EditInvoiceForm({ setIsEditModalOpen }) {
  const { dispatch } = useInvoices();
  const { id, clientAddress, clientEmail, clientName, createdAt, description, paymentDue, paymentTerms, senderAddress, status, items } = useCurrentInvoice();
  const { city, street, country, postCode } = clientAddress;
  const { city: senderCity, street: senderStreet, country: senderCountry, postCode: senderPostCode } = senderAddress;
  const submitHandler = (values) => {
    dispatch({ type: 'editInvoice', payload: { values: values, id: id } });
  };
  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <Formik
      initialValues={{
        clientAddress: {
          city: city,
          street: street,
          country: country,
          postCode: postCode,
        },
        clientName: clientName,
        clientEmail: clientEmail,
        senderAddress: {
          city: senderCity,
          country: senderStreet,
          postCode: senderCountry,
          street: senderPostCode,
        },
        status: status,
        paymentTerms: paymentTerms,
        paymentDue: paymentDue,
        description: description,
        createdAt: new Date(createdAt),
        items: items,
        id: id,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        closeModal();
        submitHandler({
          ...values,
          createdAt: formatDate(values.createdAt),
          paymentDue: formatDate(values.createdAt.setDate(values.createdAt.getDate() + values.paymentTerms)),
          total: getTotal(values.items),
        });
      }}
    >
      {({ handleSubmit, isSubmitting, values }) => {
        return (
          <StyledInvoiceFormWrapper action="#" onSubmit={handleSubmit}>
            <StyledTemplate>
              <h2>Edit Invoice</h2>
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
              <EditFormButtons closeModal={closeModal} values={values} dispatch={dispatch} id={id} />
            </StyledTemplate>
          </StyledInvoiceFormWrapper>
        );
      }}
    </Formik>
  );
}
