import React, { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { data } from '../../data';
type Props = {};

const ProductSlider = (props: Props) => {
  const [items, setItems] = useState(data);
  const [transform, setTransform] = useState(0);

  const itemsLength = items.length;
  const itemsTotalLength = itemsLength * 200;

  // console.log(itemsTotalLength);

  return (
    <section className="relative  w-full max-w-[1200px] m-auto">
      <div
        className=" flex gap-4 w-full max-w-[1200px] overflow-x-auto mx-auto my-4"
        style={{
          transform: `translateX(${transform} px)`,
        }}
      >
        {items.map((x) => {
          return (
            <div key={x.id} className="min-w-[200px] border border-red-500">
              <img
                src={x.item}
                alt="products"
                className="w-[200px]  
            "
              />
            </div>
          );
        })}
      </div>
      <div className="w-full max-w-[1220px]npm  mx-auto flex justify-between absolute bottom-[50%] left-[0] right-0 z-20 ">
        <FaChevronCircleLeft
          onClick={() => setTransform((prev) => prev + 10)}
        />
        <FaChevronCircleRight />
      </div>
    </section>
  );
};

export default ProductSlider;
