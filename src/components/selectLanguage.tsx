import { Link } from 'gatsby';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

type Props = {
  langs: { link: string; langKey: string; selected: string }[];
};

const SelectLanguage: React.FC<Props> = ({ langs }: Props) => {
  const links = langs.map(lang => (
    <Link
      to={lang.link}
      key={lang.langKey}
      style={{
        color: 'white',
      }}
    >
      <li>{lang.langKey}</li>
    </Link>
  ));

  return (
    <section>
      <header
        style={{
          color: 'white',
        }}
      >
        <FormattedMessage id="selectLanguage" />
      </header>
      <ul>{links}</ul>
    </section>
  );
};

export default SelectLanguage;
