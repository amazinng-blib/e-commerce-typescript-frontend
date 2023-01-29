import React from 'react';
import { FaStar, FaStarHalf, FaTimes } from 'react-icons/fa';

type Props = {
  rating: any;
};

const Rating = ({ rating }: Props) => {
  return (
    <div className="flex text-[#f68b1e]">
      <span>
        {rating >= 1 ? <FaStar /> : rating <= 0.5 ? <FaStarHalf /> : <FaStar />}
      </span>
      <span>
        {rating >= 2 ? <FaStar /> : rating <= 1.5 ? <FaStarHalf /> : <FaStar />}
      </span>
      <span>
        {rating >= 3 ? <FaStar /> : rating <= 2.5 ? <FaStarHalf /> : <FaStar />}
      </span>
      <span>
        {rating >= 4 ? <FaStar /> : rating <= 3.5 ? <FaStarHalf /> : <FaStar />}
      </span>
      <span>
        {rating >= 5 ? <FaStar /> : rating >= 4.5 ? <FaStarHalf /> : ''}
      </span>
    </div>
  );
};

export default Rating;
