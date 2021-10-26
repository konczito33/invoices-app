import * as Yup from 'yup';
import { generateId } from 'utils/utils';
export const validationSchema = Yup.object().shape({
  clientAddress: Yup.object().shape({
    city: Yup.string().required('This field is required'),
    street: Yup.string().required('This field is required'),
    country: Yup.string().required('This field is required'),
    postCode: Yup.number().typeError('This field must be number').required('This field is required'),
  }),
  clientName: Yup.string().required('This field is required'),
  clientEmail: Yup.string().required('This field is required').email('Type correct email'),
  senderAddress: Yup.object().shape({
    city: Yup.string().required('This field is required'),
    country: Yup.string().required('This field is required'),
    postCode: Yup.number().typeError('This field must be number').required('This field is required'),
    street: Yup.string().required('This field is required'),
  }),
  // createdAt: Yup.string().required('This field is required'),
  // total: Yup.string().required('This field is required'),
  // status: Yup.string().required('This field is required'),
  // paymentTerms: Yup.string().required('This field is required'),
  // paymentDue: Yup.string().required('This field is required'),
  // items: [],
  // description: Yup.string().required('This field is required'),
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
  paymentTerms: '',
  paymentDue: '',
  items: [],
  description: '',
  id: generateId(),
};

export const options = [{ value: 1 }, { value: 7 }, { value: 30 }, { value: 60 }];
