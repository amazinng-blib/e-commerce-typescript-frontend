import React from 'react';
import { handbag2, wristwatch } from '../../images';
type Props = {};

const Advert = (props: Props) => {
  return (
    <div className="flex gap-4 flex-col">
      <img src={handbag2} alt="women handbag" />
      <img src={wristwatch} alt="expensive wrist watch" />
    </div>
  );
};

export default Advert;
