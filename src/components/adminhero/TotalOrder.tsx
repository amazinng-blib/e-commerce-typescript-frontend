import React, { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import CompactCard from './CompactCard';
import ExpandedCard from './ExpandedCard';

type Props = {};

const TotalOrder = (props: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div>
      <CompactCard
        value="60"
        text="60"
        figure="256"
        title=" Orders"
        expanded={() => setExpanded(true)}
      />
    </div>
  );
};

export default TotalOrder;
