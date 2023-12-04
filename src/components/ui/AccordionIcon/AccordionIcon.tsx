type accordionIconProps = {
  accordionOpen: boolean;
};

const AccordionIcon = ({ accordionOpen }: accordionIconProps) => {
  return (
    <svg
      className={`mr-[8px] shrink-0  ${
        accordionOpen ? 'fill-[#173D33]' : 'fill-[#97D28B]'
      }`}
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`origin-center transform transition duration-200 ease-out ${
          accordionOpen && '!rotate-180'
        }`}
      />
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`origin-center rotate-90 transform transition duration-200 ease-out ${
          accordionOpen && '!rotate-180'
        }`}
      />
    </svg>
  );
};

export default AccordionIcon;
