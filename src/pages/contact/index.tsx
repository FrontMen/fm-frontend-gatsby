import { graphql } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { ContactPageQuery } from '../../../types/graphql-types';
import ContentModules from '../../components/contentModules';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';

type Props = {
  data: ContactPageQuery;
};

const ContactPage: React.FC<Props> = ({ data }: Props) => {
  const layout = data.contentfulLayout;
  const title = layout?.title || 'Contact';
  return (
    <Layout>
      <SEO title={title} />
      <SectionContainer>
        <h1>{title}</h1>
      </SectionContainer>
      {layout?.contentModules && (
        <ContentModules contentModules={layout.contentModules} />
      )}
    </Layout>
  );
};

export const query = graphql`
  query ContactPage {
    contentfulLayout(node_locale: { eq: "en-US" }, slug: { eq: "contact" }) {
      slug
      title
      contentModules {
        ... on ContentfulLayoutCopy {
          ...ContentfulLayoutCopyFragment
        }
      }
    }
  }
`;

export default ContactPage;
