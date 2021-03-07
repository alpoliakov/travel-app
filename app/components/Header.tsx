import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import setLanguage from 'next-translate/setLanguage';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

export default function Header() {
  // eslint-disable-next-line prefer-const
  let { locale, locales } = useRouter();
  const [currentLocal, setCurrentLocal] = useState(locale);
  const { formatMessage: f } = useIntl();

  const setLocal = ({ target }) => {
    setCurrentLocal(target.value);
  };

  useEffect(() => {
    setLanguage(currentLocal);
  }, [currentLocal]);

  return (
    <div className="header">
      <div className="header__home">
        <Link href="/">
          <a>
            <Image src="/images/logo.png" width="150px" height="60px" />
          </a>
        </Link>
      </div>
      <div className="header__search">
        <h1>{f({ id: 'search' })}</h1>
      </div>
      <div className="header__menu">
        <select className="select-css" onChange={setLocal} defaultValue={locale}>
          {locales.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <Link href="/auth/login">
          <a>{f({ id: 'btn' })}</a>
        </Link>
        <Link href="/auth/signup">
          <a>Sign Up</a>
        </Link>
      </div>
    </div>
  );
}
