import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Wrong Fullname'),
  email: Yup.string().email('Invalid email').required('Wrong Email'),
  phone: Yup.string()
    .min(6, 'Too Short!')
    .max(10, 'Too Long!')
    .matches(/^\d+$/, 'Number must be only digits')
    .required('Wrong Phone'),
  message: Yup.string(),
});
