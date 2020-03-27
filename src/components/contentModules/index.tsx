import * as React from 'react';

import { Clients } from '../Clients';
import { HeroImage } from '../layout/heroImage';
import { LayoutBody } from '../layout/layoutBody';
import { SectionContainer, SelectableThemes } from '../sectionContainer';

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
          <SectionContainer
            skew={SelectableThemes.SkewPositive}
            selectedTheme={SelectableThemes.Darkblue}
            key={`ContentfulLayoutCopy_${cm.id}`}
          >
            <LayoutBody
              title={cm.headline}
              payoff={cm.copy.copy}
              ctaLabel={cm.ctaTitle}
              ctaLink={cm.ctaLink}
              appearance={cm.appearance}
            />
          </SectionContainer>
        );
      case 'ContentfulLayoutSetOfFour':
        return (
          <SectionContainer>
            <Clients clients={cm.setItems} />
          </SectionContainer>
        );
      default:
        return null;
    }
  });
};

export default ContentModules;
