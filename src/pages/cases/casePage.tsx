import * as React from 'react';

import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';

export const CasePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Specific case" />
      <SectionContainer>
        <h1>Specific case</h1>
      </SectionContainer>
    </Layout>
  );
};
