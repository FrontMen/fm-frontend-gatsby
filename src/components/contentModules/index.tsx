import * as React from 'react';

import { CTABox } from '../layout/cta-container';
import { HeroImage } from '../layout/heroImage';
import { SectionContainer } from '../sectionContainer';

type Props = {
  contentModules: any;
};

const ContentModules: React.FC<Props> = ({ contentModules }) => {
  if (!contentModules) {
    return <p>You are trying to render contentmodules without data</p>;
  }
  return contentModules?.map((cm: any) => {
    if (!cm?.__typename) {
      return null;
    }
    // eslint-disable-next-line no-underscore-dangle
    switch (cm.__typename) {
      case 'ContentfulLayoutHeroImage':
        return <HeroImage cm={cm} key={`ContentfulLayoutHeroImage_${cm.id}`} />;
      case 'ContentfulLayoutCopy':
        return (
          <SectionContainer key={`ContentfulLayoutCopy_${cm.id}`}>
            <CTABox
              title={cm.headline}
              payoff={cm.copy.copy}
              ctaLabel={cm.ctaTitle}
              ctaLink={cm.ctaLink}
              appearance={cm.appearance}
            />
          </SectionContainer>
        );
      default:
        return null;
    }
  });
};

export default ContentModules;
