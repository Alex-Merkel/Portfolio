import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-coLab-blue dark:bg-coLab-dark-blue">
      <ul className="flex justify-center space-x-4 text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;