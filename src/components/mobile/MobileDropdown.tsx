import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BiMessageEdit } from 'react-icons/bi';
import { VscGift } from 'react-icons/vsc';
import { FaHeart, FaVolleyballBall } from 'react-icons/fa';
import { CiApple } from 'react-icons/ci';
import {
  GiHealthIncrease,
  GiTravelDress,
  GiSmartphone,
  GiPoloShirt,
  GiDrippingStar,
} from 'react-icons/gi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { RiComputerLine } from 'react-icons/ri';
import { GrPersonalComputer, GrGamepad } from 'react-icons/gr';
import { MdOutlineSmartToy, MdStars } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';

export type Tests = {
  link: string;
  text: string;
  icon?:
    | 'heart'
    | 'shoppingBag'
    | 'gift'
    | 'messageEdit'
    | 'star'
    | 'drippingstar'
    | 'car'
    | 'vollyball'
    | 'game'
    | 'toy'
    | 'poloshirt'
    | 'traveldress'
    | 'personalcomputer'
    | 'computer'
    | 'phone'
    | 'office'
    | 'health'
    | 'apple';
};

type Props = {
  type: 'my-jairy-account' | 'our-categories' | 'our-services';
  tests: Array<Tests>;
  show: boolean;
};

const MobileDropdown = ({ tests, type, show }: Props) => {
  return (
    <>
      {show && (
        <section>
          <Link
            to={`/${type}`}
            className="flex justify-between items-center p-2 hover:bg-[#f0c192] "
          >
            <span className="capitalize mb-3 font-medium ml-5 text-[#f68b1e]">
              {type === 'my-jairy-account' && 'my jairy account'}
              {type === 'our-categories' && 'our categories'}
              {type === 'our-services' && 'our services'}
            </span>
            <span>
              {type === 'my-jairy-account' ? (
                <FaGreaterThan className="text-[.7rem] " />
              ) : (
                <button type="button">See All</button>
              )}
            </span>
          </Link>

          {tests?.map((item, i) => {
            const { icon } = item;
            return (
              <Link to={item.link} key={i}>
                <div className=" p-1 capitalize text-sm  flex  items-center gap-5  m-5">
                  <div>
                    <span>
                      {' '}
                      {icon && icon === 'shoppingBag' ? (
                        <FiShoppingBag className="text-[1.4rem] " />
                      ) : null}
                    </span>
                    <span>
                      {icon && icon === 'messageEdit' ? (
                        <BiMessageEdit className="text-[1.4rem]" />
                      ) : null}
                    </span>
                    <span>
                      {' '}
                      {icon && icon === 'gift' ? (
                        <VscGift className="text-[1.4rem]" />
                      ) : null}
                    </span>
                    <span>
                      {' '}
                      {icon && icon === 'heart' ? (
                        <FaHeart className="text-[1.4rem] text-[red]" />
                      ) : null}
                    </span>
                    <span>
                      {' '}
                      <span>
                        {icon && icon === 'apple' ? (
                          <CiApple className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'health' ? (
                          <GiHealthIncrease className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'office' ? (
                          <HiOutlineOfficeBuilding className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'phone' ? (
                          <GiSmartphone className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'computer' ? (
                          <GrPersonalComputer className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'personalcomputer' ? (
                          <RiComputerLine className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'traveldress' ? (
                          <GiTravelDress className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'poloshirt' ? (
                          <GiPoloShirt className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'toy' ? (
                          <MdOutlineSmartToy className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'game' ? (
                          <GrGamepad className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'vollyball' ? (
                          <FaVolleyballBall className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'car' ? (
                          <AiFillCar className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      <span>
                        {icon && icon === 'star' ? (
                          <MdStars className="text-[1.4rem]" />
                        ) : null}
                      </span>
                      {icon && icon === 'drippingstar' ? (
                        <GiDrippingStar className="text-[1.4rem]" />
                      ) : null}
                    </span>
                  </div>
                  <span className="text-[1.1rem] tracking-wide ">
                    {' '}
                    {item.text}
                  </span>
                </div>
              </Link>
            );
          })}
        </section>
      )}
      <hr />
    </>
  );
};

export default MobileDropdown;
