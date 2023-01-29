import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Rating from '../components/rating/Rating';
import {
  addToCartAction,
  removeFromCartAction,
} from '../redux/actions/product_actions';

type Props = {};

const CartScreen = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCart = useSelector((store: any) => store.addToCart);
  // console.log(addToCart?.cart);

  const handlePlusClick = (item: any) => {
    dispatch(addToCartAction(item, addToCart) as any);
  };

  const handleMinusClick = (item: any) => {
    // const minus = addToCart?.cart?.map((x: any) => x.quantity - 1);

    dispatch(removeFromCartAction(item, addToCart) as any);
  };

  return (
    <div className="flex justify-between p-4 my-16 w-full max-w-[80rem] ">
      <div>
        {addToCart?.cart?.length > 0 ? (
          addToCart?.cart?.map((item: any, index: any) => {
            // console.log(item?.quantity);

            return (
              <div key={index} className="flex items-center gap-12 px-6">
                {item?.image?.map((img: any, index: any) => {
                  return (
                    <div key={index} className="mb-8">
                      <img src={img?.url} alt={item?.name} />
                    </div>
                  );
                })}
                <aside>
                  <article className="flex flex-col mb-8 gap-y-[2rem]">
                    <p className="uppercase tracking-wider">
                      total items :{' '}
                      <span className="capitalize font-semibold ">
                        {item?.quantity} items
                      </span>
                    </p>
                    <p className="uppercase">
                      price :{' '}
                      <span className="capitalize font-semibold">
                        ${item?.price}
                      </span>
                    </p>
                    <p className="flex items-center uppercase">
                      rating : <Rating rating={item?.rating} />
                    </p>
                  </article>

                  <div className="flex gap-6">
                    <button
                      className="border flex px-2 py-1 my-4 items-center gap-2 bg-red-500 text-white tracking-wide capitalize rounded-[.25rem ] "
                      onClick={() => {
                        handleMinusClick(item);
                      }}
                    >
                      Decrement
                      <FaMinus />
                    </button>
                    <button
                      className="border flex px-2 py-2  my-4 items-center gap-2 bg-green-500 text-white tracking-wide capitalize rounded-[.25rem]"
                      onClick={() => handlePlusClick(item)}
                    >
                      increment
                      <FaPlus />
                    </button>
                  </div>
                </aside>
              </div>
            );
          })
        ) : (
          <div className="text-center m-auto capitalize tracking-wider">
            <h4 className="text-[1.3rem]">cart is empty; go home </h4> <br />{' '}
            <br />
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-[#fb8c1e] text-white rounded-[.25rem] active:scale-x-110 hover:scale-x-110 transition-all"
            >
              Go Home
            </button>
          </div>
        )}
      </div>
      {/* <div>increment</div> */}
      <div>
        <h4 className="font-bold text-[1.5rem] tracking-widest">
          Product summary
        </h4>
        <p className="flex gap-8 text-[1.2rem] my-6 uppercase ">
          total Price:
          <span className="font-bold">
            $
            {addToCart?.cart?.reduce(
              (total: any, item: any) => total + item?.quantity * item?.price,
              0
            )}{' '}
          </span>
        </p>
        <p className="flex gap-8 text-[1.2rem] my-6 uppercase ">
          Total items:{' '}
          <span className="font-bold">
            {addToCart?.cart?.reduce(
              (total: any, item: any) => total + item?.quantity,
              0
            )}
          </span>
        </p>

        {addToCart?.cart?.length > 0 ? (
          <button
            type="button"
            className="mt-12 capitalize bg-[#f68b1e] tracking-wider px-10 py-4 rounded-[.4rem]  text-[1.1rem] text-white hover:scale-x-110 transition-all"
          >
            continue
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CartScreen;
