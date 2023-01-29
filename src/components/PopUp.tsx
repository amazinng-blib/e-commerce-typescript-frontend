import React from 'react';

type Props = {
  children: React.ReactNode;
};

const PopUp = ({ children }: Props) => {
  return (
    <div className="absolute h-[100%] w-full  backdrop-brightness-50 top-0 left-0 right-0 bottom-0">
      {children}
    </div>
  );
};

export default PopUp;
