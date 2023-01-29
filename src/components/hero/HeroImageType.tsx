import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type ItemsType = {
  span: string;
  link: string;
};

export type NavTypes = {
  h3: string;
  link: string;
  items: Array<ItemsType>;
};

type Props = {
  type:
    | 'super-market'
    | 'health-beauty'
    | 'home-office'
    | 'phones-tablets'
    | 'computing'
    | 'electronics'
    | 'fashion';
  navArrays: Array<NavTypes>;
  top?: string;
};

const HomeNavType = ({ type, navArrays, top }: Props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <section className=" w-[1200px]   rounded-lg relative">
      <div
        className="relative w-[200px] pl-2 text- cursor-pointer font-medium  text-[#222] capitalize  hover:text-[#f68b1e] "
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => navigate(`${type}`)}
      >
        {type === 'health-beauty' && 'health & beauty'}
        {type === 'super-market' && 'super market'}
        {type === 'home-office' && 'home & office'}
        {type === 'phones-tablets' && 'phones-tablets'}
        {type === 'computing' && 'computing'}
        {type === 'electronics' && 'electronics'}
      </div>

      {show && (
        <div
          className={`  absolute left-[200px] w-[782px] h-[400px] p-6 bg-[white] z-10 flex gap-8 `}
          style={{
            top: top + 'px',
          }}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {navArrays.map((x, index) => {
            return (
              <article key={index} className="">
                <Link to={x.link} className="uppercase hover:text-[#f68b1e]">
                  {x.h3}
                </Link>
                <hr />
                <div>
                  {x.items.map((d, index) => {
                    return (
                      <Link to={d.link} key={index}>
                        <p className="capitalize">{d.span}</p>
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default HomeNavType;
