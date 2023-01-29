import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PopUp from '../../components/PopUp';
import ToastScreen from '../../components/ToastScreen';
import { productActions } from '../../redux/actions/product_actions';
import CreateProducts from './CreateProducts';

type Props = {};

const ProductsScreen = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {
    loading: productLoading,
    success: productProductSuccess,
    dataInfo: products,
    error: productError,
  } = useSelector((store: any) => store.allProduct);
  const [data, setData] = useState<any>([]);
  // console.log(data);

  useEffect(() => {
    dispatch(productActions() as any);
  }, [dispatch]);

  useEffect(() => {
    if (productProductSuccess) {
      // console.log(products);
      setData(products?.products);
    }
  }, [productProductSuccess, products?.products]);

  return (
    <div className="  mt-8">
      {productProductSuccess ? <ToastScreen /> : null}
      <header className=" text-center my-6 font-semibold uppercase">
        <h2>OUR PRODUCTS</h2>
      </header>
      <div className="w-full grid grid-cols-[15rem_auto] gap-[.125rem]">
        <header className="flex flex-col gap-8 ">
          <p className="bg-white hover:bg-[#f68b1e] hover:text-white rounded-[.25rem] shadow-xl">
            <button
              onClick={() => navigate('/dashboard')}
              className=" w-full  px-4 py-4  "
            >
              Dashboard
            </button>
          </p>

          <p className="bg-white hover:bg-[#f68b1e] hover:text-white rounded-[.25rem] shadow-xl">
            <button
              type="button"
              className=" w-full  px-4 py-4  "
              onClick={() => setOpenModal(true)}
            >
              {' '}
              Create New Product
            </button>
          </p>
        </header>

        {productLoading ? <span>Loading ...</span> : null}
        {/* {productProductSuccess ? (
        <span className="  flex justify-center w-full max-w-[25rem] m-auto bg-[#fff] my-4 rounded-[.25rem] p-2 tracking-wide capitalize text-[green] ">
          {' '}
          {products.message}
        </span>
      ) : null} */}

        {productError ? (
          <span className="  flex justify-center w-full max-w-[25rem] m-auto bg-[#fff] my-4 rounded-[.25rem] p-2 tracking-wide capitalize text-[#0b0c0b] ">
            {productError}
          </span>
        ) : null}

        <div className="flex flex-wrap w-full items-center justify-center gap-4 ">
          {data?.map((product: any, index: any) => {
            return (
              <div
                key={index}
                className=" bg-[#fff] w-[300px] border-2 border-red-500 p-3"
              >
                <div>
                  <aside>
                    <h4 className="capitalize">
                      name: <span className="font-medium">{product?.name}</span>
                    </h4>
                    <h4 className="capitalize">
                      category:{' '}
                      <span className="font-medium">{product?.category}</span>
                    </h4>
                  </aside>
                  <aside>
                    <h4 className="capitalize">
                      price:{' '}
                      <span className="font-medium">${product?.price}</span>
                    </h4>
                    <h4 className="capitalize">
                      CountInStock:{' '}
                      <span className="font-medium">
                        {product?.countInStock} pieces
                      </span>
                    </h4>
                  </aside>
                </div>

                {product.image.map((img: any, index: any) => {
                  return (
                    <div key={index} className="">
                      <img
                        src={img.url}
                        alt={product?.name}
                        className="  m-auto object-cover p-4  "
                        width={200}
                        height={150}
                      />
                    </div>
                  );
                })}
                <footer className="bg-[#ccc4c4] my-3 p-3 rounded-[.25rem] w-full">
                  <h3 className="font-semibold">
                    Creator ID :{' '}
                    <span className="font-medium ">
                      {product?.user?.userId}
                    </span>
                  </h3>
                  <h3 className="font-semibold">
                    Creator Name :{' '}
                    <span className="font-medium uppercase ">
                      {product?.user?.username}
                    </span>
                  </h3>
                </footer>
              </div>
            );
          })}
        </div>
      </div>
      {openModal ? (
        <PopUp>
          <CreateProducts setOpen={setOpenModal} />
        </PopUp>
      ) : null}
    </div>
  );
};

export default ProductsScreen;
