import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Rating from '../components/rating/Rating';
import {
  addToCartAction,
  getSingleProductAction,
} from '../redux/actions/product_actions';
import store from '../redux/store';

type Props = {};

const SingleProductScreen = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation().pathname;
  //   SINGLE PRODUCT ID
  const locationId = location.split('/')[2];

  // console.log(locationId);

  let {
    loading,
    success,
    dataInfo: singleProductInfo,
    error,
  } = useSelector((store: any) => store.getSingleProduct);

  const addToCart = useSelector((store: any) => store.addToCart);

  // const dataFromLocalStorage = localStorage.getItem('loginUser')
  //     ? JSON.parse(localStorage.getItem('loginUser') || '')
  //     : null;

  // console.log(singleProductInfo);

  useEffect(() => {
    dispatch(getSingleProductAction(locationId) as any);
  }, [locationId]);

  const handleClick = (item: any) => {
    dispatch(addToCartAction(item, addToCart) as any);
  };

  return (
    <div className=" h-[100vh]">
      <div className=" flex justify-center items-center w-[55rem] py-[8rem] m-auto mt-[6rem] gap-8 bg-[#e4dbdb]">
        <section>
          {singleProductInfo?.image?.map((img: any, index: any) => {
            return (
              <div key={index} className="w-[300px] h-full">
                <img src={img?.url} alt={singleProductInfo?.name} />
              </div>
            );
          })}
        </section>
        <section className="flex flex-col ">
          <span className="font-bold uppercase">
            Product Id :{' '}
            <span className="font-semibold">{singleProductInfo?._id}</span>
          </span>
          <span className="font-bold uppercase">
            Title:{' '}
            <span className="font-semibold">{singleProductInfo?.name}</span>
          </span>
          <span className="font-bold uppercase">
            price:{' '}
            <span className="font-semibold">${singleProductInfo?.price}</span>
          </span>
          <span className="flex items-center gap-4 font-bold uppercase">
            rating: <Rating rating={singleProductInfo?.rating} />
          </span>
          <button
            type="button"
            className="bg-[#c5813e] text-white uppercase mt-6 py-2 px-10 rounded-[.25rem]"
            onClick={() => handleClick(singleProductInfo)}
          >
            Add to cart
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="bg-[#c5813e] text-white w-[8rem] m-auto mt-6 py-3 rounded-[.2rem]"
          >
            Home
          </button>
          {/* <span>: {singleProductInfo?.rating}</span> */}
        </section>
      </div>
    </div>
  );
};

export default SingleProductScreen;
