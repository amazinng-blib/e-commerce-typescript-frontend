import React, { useState } from 'react';
import { buildStyles } from 'react-circular-progressbar';
import CompactCard from './CompactCard';
import ExpandedCard from './ExpandedCard';

type Props = {};

const TotalProduct = (props: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div>
      <CompactCard
        value="70"
        text="70"
        figure="256"
        title="Customers"
        expanded={() => setExpanded(true)}
      />
    </div>
  );
};

export default TotalProduct;
