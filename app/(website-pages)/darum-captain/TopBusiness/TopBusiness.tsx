import React from 'react';

import TopBusinessLower from './TopBusinessLower';
import TopBusinessUpper from './TopBusinessUpper';

const TopBusiness = () => {
  return (
    <div className="bg-bg-gradient-white flex flex-col">
      <TopBusinessUpper />
      <TopBusinessLower />
    </div>
  );
};

export default TopBusiness;
