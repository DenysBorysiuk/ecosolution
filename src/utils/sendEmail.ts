import { Values } from '@/components/base/ContactForm/type';

export const sendEmail = async (data: Values) => {
  const apiEndpoint = '/api/email';

  const res = await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error();

  return res.json();
};
