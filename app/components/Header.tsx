import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import setLanguage from 'next-translate/setLanguage';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export default function Header() {
  const { locale, locales } = useRouter();
  const [currentLocal, setCurrentLocal] = useState(locale);
  const { formatMessage: f } = useIntl();
  const router = useRouter();

  const showSearch = router.pathname === '/';

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
        {showSearch && (
          <motion.h1 initial="initial" animate="enter" exit="exit" variants={postVariants}>
            {f({ id: 'search' })}
          </motion.h1>
        )}
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
          <a>{f({ id: 'btnLogin' })}</a>
        </Link>
        <Link href="/auth/signup">
          <a>{f({ id: 'btnSignUp' })}</a>
        </Link>
      </div>
    </div>
  );
}
