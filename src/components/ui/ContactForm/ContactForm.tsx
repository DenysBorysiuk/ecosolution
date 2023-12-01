'use client';

import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Wrong Fullname'),
  email: Yup.string().email('Invalid email').required('Wrong Email'),
  phone: Yup.string().required('Wrong Phone'),
  message: Yup.string(),
});

type Values = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

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
      className="bg-form_bg flex flex-col gap-[28px] px-[12px] py-[36px]"
    >
      <label>
        &#42; Full name
        <input
          className="bg-form_bg border-accent w-full border-b outline-none"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && touched.name && <span>{errors.name}</span>}
      </label>

      <label>
        &#42; Email
        <input
          className="bg-form_bg border-accent w-full border-b outline-none"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && touched.email && <span>{errors.email}</span>}
      </label>

      <label>
        &#42; Phone
        <input
          className="bg-form_bg border-accent w-full border-b outline-none"
          type="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />
        {errors.phone && touched.phone && <span>{errors.phone}</span>}
      </label>

      <label>
        Message
        <textarea
          className="bg-form_bg border-accent h-[147px] w-full resize-none border-b outline-none"
          name="message"
          placeholder="Your message ..."
          value={values.message}
          onChange={handleChange}
        />
      </label>

      <button
        className="link-btn border-accent ml-auto w-[100px] border hover:border-[#173D33]"
        type="submit"
      >
        Send
        <div className="bg-accent flex h-[32px] w-[32px] items-center justify-center rounded-full">
          <Image src="/icons/arrow-right.svg" alt="arrow right" width={16} height={16} />
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
