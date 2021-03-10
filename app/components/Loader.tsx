import React from 'react';

export default function Loader({ show }) {
  return (
    show && (
      <div className="w-full h-full fixed block top-0 left-0 bg-gray-700 opacity-75 z-50">
        <div
          style={{ top: '50%' }}
          className="loader top-1/2 my-0 mx-auto block relative w-0 h-0"></div>
      </div>
    )
  );
}
