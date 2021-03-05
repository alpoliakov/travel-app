import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div style={{ width: 200, display: 'flex', justifyContent: 'space-around' }}>
        <Link href="/auth/login">
          <a>Login</a>
        </Link>
        <Link href="/auth/signup">
          <a>Sign Up</a>
        </Link>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          height: 100px;
          justify-content: space-between;
          align-items: center;
          padding: 0 30px;
        }
      `}</style>
    </div>
  );
}
