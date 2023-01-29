import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addToCartAction,
  getSingleProductAction,
  homeProductsAction,
} from '../../redux/actions/product_actions';
import { ADD_TO_CART_REQUEST } from '../../redux/constants/productconstants';
// import { ADD_TO_CART_REQUEST } from '../../redux/constants/productconstants';
import Rating from '../rating/Rating';

type Props = {};

const HomeProducts = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productList, setProuctList] = useState<any>([]);

  const addToCart = useSelector((store: any) => store.addToCart);

  let {
    loading,
    success,
    dataInfo: productData,
    error,
  } = useSelector((store: any) => store.homeProducts);

  useEffect(() => {
    if (productData?.products) {
      setProuctList(productData?.products);
    }
  }, [success]);

  useEffect(() => {
    dispatch(homeProductsAction() as any);
  }, []);

  const handleClick = (item: any) => {
    dispatch(addToCartAction(item, addToCart) as any);
  };
  return (
    <div className="mb-4 ">
      <h2 className="text-center uppercase font-bold ">Products</h2>
      <div className="flex flex-wrap gap-4 justify-center mt-6 gap-y-[3rem] cursor-pointer ">
        {productList?.length > 0 &&
          productList?.map((data: any, index: any) => {
            // console.log();
            return (
              <div key={index} className="w-[400px] mb-4">
                {data?.image?.map((img: any, index: any) => {
                  return (
                    <div
                      key={index}
                      onClick={() => navigate(`/product/${data?._id}`)}
                    >
                      <img src={img?.url} alt={data?.name} />
                    </div>
                  );
                })}

                <div className="bg-white flex  flex-col p-3 ">
                  <span className="text-end font-bold">${data?.price}</span>
                  <span
                    className="text-center uppercase font-semibold"
                    onClick={() => {
                      navigate(`/product/${data?._id}`);
                    }}
                  >
                    {data?.name}
                  </span>
                  <aside className="flex items-center gap-4 mt-3">
                    <span>{data?.rating}</span>
                    <span>
                      <Rating rating={data?.rating} />
                    </span>
                  </aside>
                  <button
                    type="button"
                    className="bg-[#f68b1e] text-white hover:bg-[#e79a4e] py-2 rounded-[.25rem] mt-2"
                    onClick={() => {
                      handleClick(data);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomeProducts;
