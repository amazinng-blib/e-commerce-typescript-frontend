import React, { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProductAction,
  productActions,
} from '../../redux/actions/product_actions';
import ToastScreen from '../../components/ToastScreen';

type Props = {
  setOpen: any;
};

const CreateProducts = ({ setOpen }: Props) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState<string>() as any;
  const [imageData, setImageData] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [numReviews, setNumReviews] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [countInStock, setCountInStock] = useState<string>('');
  const imageRef = useRef(null) as any;
  // console.log(imageData);

  const {
    loading: productLoading,
    success: productSuccess,
    dataInfo: productData,
    error: productError,
  } = useSelector((store: any) => store.createProduct);

  const handleImageChange = (e: any) => {
    const file = e.target.files;
    if (file[0]) {
      setImage(file[0]);

      // const reader: any = new FileReader();
      // reader.addEventListener('load', () => {
      //   // console.log(reader?.result);

      //   setImageData(reader?.result);
      // });
      // reader.readAsDataURL(file[0]);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(
      createProductAction({
        name,
        image,
        price,
        numReviews,
        rating,
        description,
        category,
        countInStock,
      }) as any
    );
  };

  useEffect(() => {
    if (productSuccess) {
      setName('');
      setCategory('');
      setPrice('');
      setCountInStock('');
      setImage('');
      setNumReviews('');
      setDescription('');
      setRating('');
      imageRef.current.reset();
      dispatch(productActions() as any);
    }
  }, [productSuccess]);

  return (
    <div className="bg-[#1a212e] w-full max-w-[35rem] m-auto mt-8 h-[35rem] overflow-y-auto">
      {productSuccess ? <ToastScreen /> : null}
      <div
        className="flex justify-end mr-4 mt-4 cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <span className="text-[red] text-[1.5rem] ">
          <FaTimes />
        </span>
      </div>
      <form
        className="w-[90%] m-auto py-8"
        onSubmit={handleSubmit}
        ref={imageRef}
      >
        <h2 className="text-center font-bold text-white">Create New Product</h2>

        <div className="flex flex-col gap-4 mb-2">
          <label htmlFor="name" className="text-white font-bold">
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            className="bg-[#fff] text-[#222] p-3 border-2 rounded-[.25rem] cursor-pointer border-white focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-4 mb-2">
          <label htmlFor="category" className="text-white font-bold">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="bg-[#fff] text-[#222] p-3 border-2 rounded-[.25rem] cursor-pointer border-white focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-4 mb-2">
          <label htmlFor="countInStock" className="text-white font-bold">
            CountInStock:
          </label>
          <input
            type="text"
            id="countInStock"
            name="countInStock"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
            placeholder="Category"
            className="bg-[#fff] text-[#222] p-3 border-2 rounded-[.25rem] cursor-pointer border-white focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-4 mb-2">
          <label htmlFor="price" className="text-white font-bold">
            Product price:
          </label>
          <input
            type="tel"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter product price"
            className="bg-[#fff] text-[#222] p-3 border-2 rounded-[.25rem] cursor-pointer border-white focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-4 mb-2">
          <label htmlFor="rating" className="text-white font-bold">
            Product rating:
          </label>
          <input
            type="tel"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder=" product rating"
            className="bg-[#fff] text-[#222] p-3 border-2 rounded-[.25rem] cursor-pointer border-white focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-4 mb-2">
          <label htmlFor="numReviews" className="text-white font-bold">
            Product's numReviews:
          </label>
          <input
            type="tel"
            id="numReviews"
            name="numReviews"
            value={numReviews}
            onChange={(e) => setNumReviews(e.target.value)}
            placeholder=" product numReviews"
            className="bg-[#fff] text-[#222] p-3 border-2 rounded-[.25rem] cursor-pointer border-white focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-4 mb-2">
          <label htmlFor="description" className="text-white font-bold">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-[#fff] text-[#222] p-3 border-2 rounded-[.25rem] cursor-pointer border-white focus:outline-none"
          ></textarea>
        </div>
        <div className="flex flex-col gap-4 mb-2">
          <label htmlFor="image" className="text-white font-bold">
            Product image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="bg-[#fff] text-[#222] p-3 border-2 rounded-[.25rem] cursor-pointer border-white focus:outline-none"
          />
        </div>
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="upload img"
            className="w-full mb-4"
          />
        ) : null}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="  bg-[#a76523] text-white px-8 py-2 rounded-[.25rem]"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProducts;
