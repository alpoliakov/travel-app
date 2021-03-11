import React from 'react';
import { useIntl } from 'react-intl';

export default function Search() {
  const { formatMessage: f } = useIntl();

  return (
    <div className="flex items-center justify-center">
      <form>
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-2 text-sm text-white bg-gray-800 rounded-md pl-10 pr-2 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder={`${f({ id: 'search' })}...`}
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
}
