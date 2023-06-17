import React from 'react';

const GNB = () => {
  return (
    <div className="navbar bg-base-100 fixed p-5 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#hero">☀️ Midsummer</a>
            </li>
            <li>
              <a href="#line-up">🎹 Festival</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">노래🎶 하지☀️</a>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex ml-auto">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#hero">☀️ Midsummer</a>
            </li>
            <li>
              <a href="#line-up">🎹 Festival</a>
            </li>
          </ul>
        </div>
        <a
          href="https://forms.gle/DhMQduXmHYKdZYmF9"
          className="btn"
          target="_blank"
        >
          🎟️🎫 공연 티켓
        </a>
      </div>
    </div>
  );
};

export default GNB;
