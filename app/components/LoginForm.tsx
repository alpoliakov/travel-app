import Link from 'next/link';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { formatMessage: f } = useIntl();

  return (
    <div className="w-full max-w-lg">
      <div className="leading-loose">
        <form className="m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
          <p className="text-white font-medium text-center text-lg font-bold uppercase">
            {f({ id: 'btnLogin' })}
          </p>
          <div className="">
            <label className="block text-sm text-white" htmlFor="email">
              E-mail
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="email"
              id="email"
              value={email}
              placeholder={f({ id: 'phEmail' })}
              aria-label="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="flex items-center font-medium tracking-wide text-white text-xs mt-1 ml-1">
              Invalid username field !
            </span>
          </div>
          <div className="mt-8">
            <label className="block  text-sm text-white" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder={f({ id: 'phPass' })}
              arial-label="password"
              required
            />
            <span className="flex items-center font-medium tracking-wide text-white text-xs mt-1 ml-1">
              Invalid username field !
            </span>
          </div>

          <div className="mt-8 items-center flex justify-between">
            <button
              className="px-4 py-1 text-white font-bold tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
              type="submit">
              {f({ id: 'enter' })}
            </button>
            <a
              className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-blue-800"
              role="button"
              target="_blanck"
              href="https://www.youtube.com/watch?v=a3edsIATN6A">
              {f({ id: 'forgetPass' })}
            </a>
          </div>
          <div className="text-center">
            <Link href="/auth/signup">
              <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-blue-800">
                {f({ id: 'createAcc' })}
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
