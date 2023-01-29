import {
  FaHome,
  FaPen,
  FaProcedures,
  FaShoppingBag,
  FaUser,
} from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

const data = [
  {
    icon: FaHome,
    title: 'product',
    link: '/dashboard/product',
  },
  {
    icon: FaUser,
    title: 'customers',
    link: '/dashboard/customers',
  },
  {
    icon: FaShoppingBag,
    title: 'orders',
    link: '/dashboard/orders',
  },
  // {
  //   icon: FaPen,
  //   title: 'Create Product',
  //   link: '/dashboard/create',
  // },
];

export default data;
