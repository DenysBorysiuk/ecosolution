'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Arrow from 'public/icons/arrow-md.svg';
import { Values } from './type';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Wrong Fullname'),
  email: Yup.string().email('Invalid email').required('Wrong Email'),
  phone: Yup.string().required('Wrong Phone'),
  message: Yup.string(),
});

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },

    validationSchema: schema,

    onSubmit: (values: Values) => {
      console.log(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-form_bg px-[12px] py-[36px] md:w-[342px] md:px-[24px] 
      xl:w-[596px] xl:p-[48px]"
    >
      <div className="mb-[16px] flex flex-col gap-[28px] xl:mb-[32px]">
        <label className="relative">
          <span className="mb-[8px] block text-[16px] xl:mb-[12px]">
            &#42; Full name
          </span>
          <input
            className={`w-full border-b  bg-form_bg pb-[8px] text-[18px] 
            tracking-[-0.72px] outline-none xl:text-[20px]
            ${
              errors.name && touched.name ? 'border-[#D28B8B]' : 'border-accent'
            }`}
            type="text"
            name="name"
            placeholder="John Rosie"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && (
            <span className="absolute bottom-[-18px] right-0 text-[12px] text-[#D28B8B]">
              {errors.name}
            </span>
          )}
        </label>

        <label className="relative">
          <span className="mb-[8px] block text-[16px] leading-[1.2] xl:mb-[12px]">
            &#42; Email
          </span>
          <input
            className={`w-full border-b  bg-form_bg pb-[8px] 
             text-[18px] tracking-[-0.72px] outline-none xl:text-[20px]
              ${
                errors.name && touched.name
                  ? 'border-[#D28B8B]'
                  : 'border-accent'
              }`}
            type="email"
            name="email"
            placeholder="johnrosie@gmail.com"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <span className="absolute bottom-[-18px] right-0 text-[12px] text-[#D28B8B]">
              {errors.email}
            </span>
          )}
        </label>

        <label className="relative">
          <span className="mb-[8px] block text-[16px] xl:mb-[12px]">
            &#42; Phone
          </span>
          <input
            className={`block w-full border-b  bg-form_bg pb-[8px] text-[18px]
            tracking-[-0.72px] outline-none xl:text-[20px]
             ${
               errors.name && touched.name
                 ? 'border-[#D28B8B]'
                 : 'border-accent'
             }`}
            type="phone"
            name="phone"
            placeholder="380961234567"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && touched.phone && (
            <span className="absolute bottom-[-18px] right-0 text-[12px] text-[#D28B8B]">
              {errors.phone}
            </span>
          )}
        </label>

        <label>
          <span className="mb-[8px] block text-[16px] leading-[1.2] tracking-[-0.64px] xl:mb-[12px]">
            Message
          </span>
          <textarea
            className="block h-[147px] w-full resize-none border-b border-accent bg-form_bg text-[18px] leading-[1.2] tracking-[-0.72px] outline-none xl:text-[20px]"
            name="message"
            placeholder="Your message"
            value={values.message}
            onChange={handleChange}
          />
        </label>
      </div>

      <button
        className="anim btn group ml-auto w-[100px] border border-accent hover:border-primary"
        type="submit"
      >
        Send
        <span className="icon flex h-[32px] w-[32px] bg-accent text-primary">
          <Arrow />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
