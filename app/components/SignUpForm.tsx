import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { REG_EMAIL } from '../constants';
import { useAuth } from '../lib/useAuth';
import Loader from './Loader';

export default function SignUpForm() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorPsw, setErrorPsw] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const { user, signUp, error } = useAuth();

  const { formatMessage: f } = useIntl();

  const validation = async ({ name, email, password, avatar }) => {
    let result = false;
    if (!password || password.length < 6) {
      await setErrorPsw(true);
      result = true;
    }

    if (!name || name.length < 3) {
      await setErrorName(true);
      result = true;
    }

    if (!email || !email.match(REG_EMAIL)) {
      await setValidEmail(true);
      result = true;
    } else {
      await setValidEmail(false);
    }

    return result;
  };

  const onFinish = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, password } = userData;
    let { avatar } = userData;

    const valid = await validation(userData);

    if (!avatar) {
      avatar = '/images/hacker.png';
    }

    if (valid) {
      setLoading(false);
      return;
    }

    await signUp(name, email, password, avatar);
  };

  useEffect(() => {
    if (user) {
      setLoading(false);
    }

    if (error) {
      setLoading(false);
    }
  }, [user, error]);

  return (
    <div className="w-full max-w-lg">
      <div className="leading-loose">
        <Loader show={loading} />
        <form className="m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
          <p className="text-white font-medium text-center text-lg font-bold uppercase">
            {f({ id: 'register' })}
          </p>
          <div className="">
            <label className="block text-sm text-white" htmlFor="name">
              {f({ id: 'name' })}
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="name"
              id="name"
              value={userData.name}
              placeholder={f({ id: 'phName' })}
              aria-label="name"
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });

                if (userData.name.length > 2) {
                  setErrorName(false);
                }
              }}
              required
            />
            <span className="flex items-center font-medium tracking-wide text-yellow-500 text-xs mt-1 ml-1">
              {errorName && f({ id: 'errorName' })}
            </span>
          </div>
          <div className="mt-1">
            <label className="block text-sm text-white" htmlFor="email">
              E-mail:
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="email"
              id="email"
              value={userData.email}
              placeholder={f({ id: 'phEmail' })}
              aria-label="email"
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              required
            />
            <span className="flex items-center font-medium tracking-wide text-yellow-500 text-xs mt-1 ml-1">
              {validEmail && f({ id: 'errorEmail' })}
            </span>
          </div>
          <div className="mt-1">
            <label className="block  text-sm text-white" htmlFor="password">
              {f({ id: 'pass' })}
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="password"
              id="password"
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
                if (userData.password.length > 5) {
                  setErrorPsw(false);
                }
              }}
              name="password"
              minLength={6}
              placeholder={f({ id: 'phPass' })}
              arial-label="password"
              required
            />
            <span className="flex items-center font-medium tracking-wide text-yellow-500 text-xs mt-1 ml-1">
              {errorPsw && f({ id: 'errorPass' })}
            </span>
          </div>
          <div className="mt-1">
            <label className="block  text-sm text-white" htmlFor="avatar">
              {f({ id: 'avatar' })}
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="avatar"
              id="avatar"
              value={userData.avatar}
              onChange={(e) => setUserData({ ...userData, avatar: e.target.value })}
              name="avatar"
              placeholder={f({ id: 'phAvatar' })}
              arial-label="loader"
            />
            <span className="flex items-center font-medium tracking-wide text-yellow-500 text-xs mt-1 ml-1">
              Invalid username field !
            </span>
          </div>

          <div className="mt-8 items-center flex justify-between">
            <button
              className="px-4 py-1 text-white font-bold tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
              type="submit"
              onClick={onFinish}>
              {f({ id: 'enter' })}
            </button>
            <Link href="/auth/login">
              <a
                className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-blue-800"
                role="button">
                Or {f({ id: 'btnLogin' })}
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
