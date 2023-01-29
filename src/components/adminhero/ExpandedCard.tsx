import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Chart from 'react-apexcharts';

type Props = {
  setExpanded: () => void;
  // type: "product" | "order" | "customer"
};

const ExpandedCard = ({ setExpanded }: Props) => {
  const data = {
    series: [
      {
        name: 'Series 1',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
    ],
    option: {
      chart: {
        type: 'area',
        height: 'auto',
      },
      dropShadow: {
        enable: false,
        enableOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },
      fill: {
        colors: ['#fff'],
        type: 'gradient',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['white'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00.000Z',
          '2018-09-19T01:30.000Z',
          '2018-09-19T02:30.000Z',
          '2018-09-19T03:30.000Z',
          '2018-09-19T04:30.000Z',
        ],
      },
    },
  };

  return (
    <div>
      <div>
        <span>
          <FaTimes onClick={setExpanded} />
        </span>
      </div>
      <span>title</span>
      <div className="chart-container">
        {' '}
        <Chart type="area" series={data.series} />
      </div>
      <span>Last 24 hours</span>
    </div>
  );
};

export default ExpandedCard;
