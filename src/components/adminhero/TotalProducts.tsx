import React, { useState } from 'react';
import CompactCard from './CompactCard';
import ExpandedCard from './ExpandedCard';

type Props = {};

const TotalProducts = (props: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div>
      <CompactCard
        value="90"
        text="90"
        figure="256"
        title=" Products"
        expanded={() => setExpanded(true)}
      />
    </div>
  );
};

export default TotalProducts;
