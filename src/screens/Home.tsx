import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/hero/Hero';
import HomeProducts from '../components/home/HomeProducts';
import ProductSlider from '../components/productslider/ProductSlider';
import Login from './Login';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="hidden md:block mb-4">
        <Hero />
        <ProductSlider />
        <HomeProducts />
      </div>
    </>
  );
};

export default Home;
