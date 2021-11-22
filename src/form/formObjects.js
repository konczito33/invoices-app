import * as Yup from 'yup';
import { generateId } from 'utils/utils';
export const validationSchema = Yup.object().shape({
  clientAddress: Yup.object().shape({
    city: Yup.string().required('This field is required'),
    street: Yup.string().required('This field is required'),
    country: Yup.string().required('This field is required'),
    postCode: Yup.string().required('This field is required'),
  }),
  clientName: Yup.string().required('This field is required').max(20, 'Max 20 char'),
  clientEmail: Yup.string().required('This field is required').email('Type correct email'),
  senderAddress: Yup.object().shape({
    city: Yup.string().required('This field is required'),
    country: Yup.string().required('This field is required'),
    postCode: Yup.string().required('This field is required'),
    street: Yup.string().required('This field is required'),
  }),
  createdAt: Yup.string().required('This field is required'),
  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('This field is required'),
      qty: Yup.number().typeError('Type correct qty').required('This field is required'),
      price: Yup.number().typeError('Type correct price').required('This field is required'),
    }),
  ),
  description: Yup.string().required('This field is required'),
});
const date = new Date();

export const initialValue = {
  clientAddress: {
    city: '',
    street: '',
    country: '',
    postCode: '',
  },
  clientName: '',
  clientEmail: '',
  senderAddress: {
    city: '',
    country: '',
    postCode: '',
    street: '',
  },
  createdAt: date,
  total: '',
  status: 'pending',
  paymentTerms: 1,
  paymentDue: '',
  items: [],
  description: '',
  id: '',
};

export const options = [{ value: 1 }, { value: 7 }, { value: 30 }, { value: 60 }];
