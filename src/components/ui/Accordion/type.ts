import { Dispatch, SetStateAction } from 'react';

export type AccordionProps = {
  children: React.ReactNode;
  question: string;
  id: string;
  accordionOpen: boolean;
  setCurrent: Dispatch<SetStateAction<number>>;
  index: number;
};
