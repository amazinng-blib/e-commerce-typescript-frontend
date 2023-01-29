import React from 'react';

type Props = {};

const data = [
  {
    id: 1,
    from: 'Nwankwo Ernest',
    product: 'Hp Laptop',
    fee: 175000,
    success: true,
    fail: false,
    pending: false,
  },
  {
    id: 2,
    from: 'Bruno Fernandez',
    product: 'Scoccer Boat',
    fee: 250000,
    success: true,
    fail: false,
    pending: false,
  },
  {
    id: 3,
    from: 'Lisandro Martinez',
    product: 'Chin Guard',
    fee: 75000,
    success: false,
    fail: false,
    pending: true,
  },
  {
    id: 4,
    from: 'David De Gea',
    product: 'Jessy',
    fee: 30000,
    success: true,
    fail: false,
    pending: false,
  },
  {
    id: 5,
    from: 'Marcus Rashford',
    product: 'Sports Car',
    fee: 200000,
    success: false,
    fail: true,
    pending: false,
  },
];

const AdminTable = (props: Props) => {
  // const even = data.length % 2 === 0;

  return (
    <div className="p-8 mt-8">
      <h3 className="text-center my-4 font-semibold">Recent Orders</h3>
      <table className={` w-full p-8 border-2`}>
        <thead>
          <tr className="text-left ">
            <th>Name</th>
            <th>Product</th>
            <th>Price</th>
            <th>Pending</th>
            <th>Success</th>
            <th>Fail</th>
          </tr>
        </thead>

        {data.map((item, index) => {
          const even = index % 2 === 0;
          return (
            <tbody
              key={index}
              className={`${even ? 'bg-[#eeeeee]' : 'bg-white'} p-4`}
            >
              <tr>
                <td className="font-semibold">{item.from}</td>
                <td>{item.product}</td>
                <td>${item.fee}</td>
                <td className={`${item.pending ? 'text-[#db7384]' : ''}`}>
                  {item.pending ? 'pending ' : ''}
                </td>
                <td className={`${item.success ? 'text-[#35a735]' : ''}`}>
                  {item.success ? 'success' : ''}
                </td>
                <td>{item.fail ? 'Fail' : ''}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default AdminTable;
