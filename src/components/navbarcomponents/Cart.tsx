import React, { useEffect, useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

type Props = {};

const Cart = (props: Props) => {
  // const [itemsInCart, setItemsInCart] = useState<any>([]);
  const addToCart = useSelector((store: any) => store.addToCart);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setItemsInCart(addToCart);
  // }, [addToCart]);

  // useEffect(() => {
  //   console.log({ addToCart });
  // }, [addToCart]);
  return (
    <div className="relative" onClick={() => navigate('/cart')}>
      <span className="flex items-center gap-2 hover:text-[#f68b1e] cursor-pointer">
        {' '}
        <BsCart /> Cart
      </span>
      {addToCart?.cart?.length > 0 ? (
        <button className="absolute top-[-.5rem] left-[-.6rem] flex items-center justify-center text-[.8rem] font-bold text-white bg-[red] w-[1.2rem] p-[.15rem]  rounded-[100%]">
          {addToCart?.cart?.reduce(
            (total: any, item: any) => total + item.quantity,
            0
          )}
        </button>
      ) : null}
    </div>
  );
};

export default Cart;
