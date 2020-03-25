import { ThemeProvider } from 'emotion-theming';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/nl';
import PropTypes from 'prop-types';
import { getCurrentLangKey } from 'ptz-i18n';
import * as React from 'react';
import { IntlProvider } from 'react-intl';

import { SiteSiteMetadataLanguages } from '../../types/graphql-types';
import { useSiteMetadata } from '../hooks/useSiteMetaData';
import { theme } from '../utils/styled';
import { SkipLink } from './SkipLink';

type Props = {
  children: React.ReactNode;
};
enum LANGS {
  EN = 'en-US',
  NL = 'nl',
}

const BaseLayout: React.FC<Props> = ({ children }: Props) => {
  const data = useSiteMetadata();
  const url = window.location.pathname;
  const { langs, defaultLangKey } = data.languages as SiteSiteMetadataLanguages;
  const langKey: LANGS = getCurrentLangKey(langs, defaultLangKey, url);

  const i18nMessages = {
    [LANGS.EN]: { selectLanguage: 'Select your language' },
    [LANGS.NL]: { selectLanguage: 'Kies je taal' },
  };

  return (
    <IntlProvider locale={langKey} messages={i18nMessages[langKey]}>
      <ThemeProvider theme={theme}>
        <SkipLink />
        {children}
      </ThemeProvider>
    </IntlProvider>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
