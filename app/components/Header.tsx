import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Header() {
  // eslint-disable-next-line prefer-const
  let { locale, locales } = useRouter();

  const setLocal = ({ target }) => {
    locale = target.value;
    console.log(locale);
  };

  return (
    <div className="header">
      <div className="header__home">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="header__search">
        <h1>Search</h1>
      </div>
      <div
        className="header__menu"
        style={{ width: 200, display: 'flex', justifyContent: 'space-around' }}>
        <select onBlur={setLocal}>
          {locales.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <Link href="/auth/login">
          <a>Login</a>
        </Link>
        <Link href="/auth/signup">
          <a>Sign Up</a>
        </Link>
      </div>
    </div>
  );
}
