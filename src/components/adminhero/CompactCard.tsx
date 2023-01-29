import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

type Props = {
  // type: 'products' | 'orders' | 'customers'
  value: any;
  text: any;
  figure: any;
  title: any;
  expanded: () => void;
};

const CompactCard = ({ value, text, figure, title, expanded }: Props) => {
  return (
    <div
      className="flex flex-1 items-center gap-4 w-[20rem] h-[11rem] p-2 border-2 rounded-[.7rem] text-[#e46565] font-medium letter-spa cursor-pointer "
      onClick={expanded}
    >
      <div
        className=" flex-1 flex flex-col justify-center  items-start gap-2 "
        style={{ width: 120, height: 140 }}
      >
        <CircularProgressbar
          value={value}
          text={`${text}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            // rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            // strokeLinecap: 'butt',

            // Text size
            textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        <h4 className="text-center ml-3 uppercase">{title}</h4>
      </div>
      <div className="flex-1 flex flex-col justify-between items-end ">
        <img src="" alt="" />
        <span className="font-bold text-[18px]">${figure}</span>
        <span className="text-[12px] font-medium">Last 24 Hours</span>
      </div>
    </div>
  );
};

export default CompactCard;
