import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="w-screen">
      <div className="py-4 border-b-1 border-blue-950 flex flex-row gap-6 font-sans text-3xl decoration-1 justify-center underline decoration-blue-900 underline-offset-8 text-blue-400">
        <Link href={'/'}>Create</Link>
        <Link href={'/play'}>Play</Link>
      </div>
    </div>
  );
};

export default NavBar;
