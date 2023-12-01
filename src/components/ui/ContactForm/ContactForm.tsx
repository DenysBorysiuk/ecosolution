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
      className="bg-form_bg flex flex-col px-[12px] py-[36px] md:w-[342px] md:px-[24px] xl:w-[596px] xl:p-[48px]"
    >
      <div className="mb-[16px] flex flex-col gap-[28px] xl:mb-[32px]">
        <label>
          <span className="mb-[8px] block text-[16px] leading-[1.2] tracking-[-0.64px] xl:mb-[12px]">
            &#42; Full name
          </span>
          <input
            className="bg-form_bg border-accent w-full border-b pb-[8px] text-[18px] 
            leading-[1.2] tracking-[-0.72px] outline-none xl:text-[20px]"
            type="text"
            name="name"
            placeholder="John Rosie"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </label>

        <label>
          <span className="mb-[8px] block text-[16px] leading-[1.2] tracking-[-0.64px] xl:mb-[12px]">
            &#42; Email
          </span>
          <input
            className="bg-form_bg border-accent w-full border-b pb-[8px] text-[18px] leading-[1.2] tracking-[-0.72px] outline-none xl:text-[20px]"
            type="email"
            name="email"
            placeholder="johnrosie@gmail.com"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </label>

        <label>
          <span className="mb-[8px] block text-[16px] leading-[1.2] tracking-[-0.64px] xl:mb-[12px]">
            &#42; Phone
          </span>
          <input
            className="bg-form_bg border-accent block  w-full border-b pb-[8px] text-[18px] leading-[1.2] tracking-[-0.72px] outline-none xl:text-[20px]"
            type="phone"
            name="phone"
            placeholder="380961234567"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && touched.phone && <span>{errors.phone}</span>}
        </label>

        <label>
          <span className="mb-[8px] block text-[16px] leading-[1.2] tracking-[-0.64px] xl:mb-[12px]">
            Message
          </span>
          <textarea
            className="bg-form_bg border-accent block h-[147px] w-full resize-none border-b text-[18px] leading-[1.2] tracking-[-0.72px] outline-none xl:text-[20px]"
            name="message"
            placeholder="Your message"
            value={values.message}
            onChange={handleChange}
          />
        </label>
      </div>

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
