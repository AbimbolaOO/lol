import React from 'react';

import CaptainIsBuiltLower from './CaptainIsBuiltLower';
import CaptainsIsBuiltUpper from './CaptainsIsBuiltUpper';

const CaptainIsBuilt = () => {
  return (
    <div className="flex flex-col">
      <CaptainsIsBuiltUpper />
      <CaptainIsBuiltLower />
    </div>
  );
};

export default CaptainIsBuilt;
