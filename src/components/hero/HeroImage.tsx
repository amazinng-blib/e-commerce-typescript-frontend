import React from 'react';
import HomeNavType, { NavTypes } from './HeroImageType';

const supermarket: Array<NavTypes> = [
  {
    h3: 'cupboard',
    link: '/cupboard',
    items: [
      {
        span: 'rice',
        link: '/rice',
      },
      {
        span: 'beans',
        link: '/beans',
      },
      {
        span: 'garri',
        link: '/garri',
      },
      {
        span: 'yam',
        link: '/yam',
      },
    ],
  },
  {
    h3: 'househood cleaning',
    link: '/household-cleaning',
    items: [
      {
        span: 'soap',
        link: '/soap',
      },
      {
        span: 'detergent',
        link: '/detergent',
      },
      {
        span: 'bathroom cleaners',
        link: '/bathroom-cleaners',
      },
      {
        span: 'dish washer',
        link: '/dish-washer',
      },
    ],
  },
];

const homeandoffice: Array<NavTypes> = [
  {
    h3: 'make up',
    link: '/make-up',
    items: [
      {
        span: 'foundation',
        link: '/foundation',
      },
      {
        span: 'powder',
        link: '/powder',
      },
      {
        span: 'lip liner',
        link: '/lip-linear',
      },
    ],
  },
  {
    h3: 'hair care',
    link: '/hair-care',
    items: [
      {
        span: 'hair & scalp care',
        link: '/hair-scalp-care',
      },
      {
        span: 'hair accessories',
        link: '/hair-accessories',
      },
      {
        span: 'hair cutting tools',
        link: '/hair-cutting-tools',
      },
      {
        span: 'shampo & conditioner',
        link: '/shampo-conditioner',
      },
    ],
  },
];

const phonesandtablet: Array<NavTypes> = [
  {
    h3: 'mobile phones',
    link: '/mobile-phones',
    items: [
      {
        span: 'smart phones',
        link: '/smart-phones',
      },
      {
        span: 'basic phones',
        link: '/basic-phones',
      },
      {
        span: 'refurbished phones',
        link: '/refurbished-phones',
      },
    ],
  },
  {
    h3: 'mobile accessories',
    link: '/mobile-accessories',
    items: [
      {
        span: 'accessory kit',
        link: '/accessories-kit',
      },
      {
        span: 'adapters',
        link: '/adapters',
      },
      {
        span: 'batteries',
        link: '/batteries',
      },
    ],
  },
  {
    h3: 'top smart phones',
    link: '/top-smart-phones',
    items: [
      {
        span: 'iphone 11 pro max',
        link: '/iphone-11-pro',
      },
      {
        span: 'iphone 12 pro max',
        link: 'iphone-12-pro',
      },
      {
        span: 'iphone 13 pro max',
        link: '/iphone-13-pro',
      },
      {
        span: 'iphone 14 pro max',
        link: '/iphone-14-pro',
      },
    ],
  },
];

const computing: Array<NavTypes> = [
  {
    h3: 'computers',
    link: '/computers',
    items: [
      {
        span: 'desktops',
        link: '/desktops',
      },
      {
        span: 'laptops',
        link: '/laptops',
      },
    ],
  },
  {
    h3: 'printers',
    link: '/printers',
    items: [
      {
        span: 'inkjet printers',
        link: '/inkjet-printers',
      },
      {
        span: 'laser printers',
        link: '/laser-printers',
      },
      {
        span: 'printer ink & toney',
        link: '/printers-ink-toney',
      },
    ],
  },
  {
    h3: 'top brands',
    link: '/top-brands',
    items: [
      {
        span: 'hp',
        link: '/hp',
      },
      {
        span: 'longitech',
        link: '/longitech',
      },
      {
        span: 'dell',
        link: '/dell',
      },
      {
        span: 'lenovo',
        link: '/lenovo',
      },
      {
        span: 'apple',
        link: '/apple',
      },
    ],
  },
];

const electronics: Array<NavTypes> = [
  {
    h3: 'television & video',
    link: '/television-video',
    items: [
      {
        span: 'television',
        link: '/television',
      },
      {
        span: 'smart tv',
        link: '/smart-tv',
      },
      {
        span: `LED & LCD tv's `,
        link: '/led-lcd-tv',
      },
    ],
  },
  {
    h3: 'cameras & photos',
    link: '/cameras-photos',
    items: [
      {
        span: 'digital cameras',
        link: '/digital-cameras',
      },
      {
        span: 'projectors',
        link: '/projectors',
      },
      {
        span: 'video surveillance',
        link: '/video-surveillance',
      },
      {
        span: 'camcorders',
        link: '/camcorders',
      },
    ],
  },
];

type Props = {};

const HomeNav = (props: Props) => {
  return (
    <div className="w-full h-[400px] rounded-sm bg-[white] ">
      <HomeNavType navArrays={supermarket} type="super-market" top="-1.5" />
      <HomeNavType navArrays={homeandoffice} type="health-beauty" top="-25" />
      <HomeNavType navArrays={phonesandtablet} type="home-office" top="-47" />
      <HomeNavType navArrays={computing} type="phones-tablets" top="-72" />
      <HomeNavType navArrays={electronics} type="computing" top="-97.5" />

      {/* <HomeNavType navArrays={electronics} type="electronics" /> */}
    </div>
  );
};

export default HomeNav;
