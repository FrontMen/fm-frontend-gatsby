import * as React from 'react';

import { SectionContainer } from './sectionContainer';

export const DebugData: React.FC<{ data: any }> = data => (
  <SectionContainer>
    <pre css={{ backgroundColor: '#efefef', overflow: 'scroll' }}>
      {JSON.stringify(data, null, 2)}
    </pre>
  </SectionContainer>
);
