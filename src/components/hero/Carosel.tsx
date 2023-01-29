import React, { useEffect, useState } from 'react';
import { data } from '../../data';
type Props = {};

const Carosel = (props: Props) => {
  const [index, setIndex] = useState<number>(0);
  const [btn, setBtn] = useState(data.map((x, index) => index));

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const dataIndex = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(dataIndex);
  }, [index]);

  return (
    <article className="w-full relative h-full min-h-[400px]  max-h-[400px]">
      {data.map((x, xIndex) => {
        let position = 'nextSlide';
        if (xIndex === index) {
          position = 'active';
        }

        if (
          xIndex === index - 1 ||
          (index === 0 && xIndex === data.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (
          <div
            key={xIndex}
            className={`absolute top-0  w-full h-[400px]  opacity-0 ${position}`}
          >
            <img
              src={x.item}
              alt="goods"
              className=" h-full w-full object-contain  "
              width={1200}
              height={250}
            />
          </div>
        );
      })}
      <div className="flex gap-4 justify-center   absolute bottom-[50px] w-full">
        {btn.map((x, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={() => setIndex(index)}
              className="w-[12px] h-[12px] border-2 rounded-full "
            >
              <span className="hidden"> {x}</span>
            </button>
          );
        })}
      </div>
    </article>
  );
};

export default Carosel;
