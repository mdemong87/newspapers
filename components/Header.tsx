import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {

  return (
    <div className='bg-white sticky top-0 z-50'>
      <div className='container'>
        <div className="flex justify-between items-center py-1.5">
          <Link
            href="/"
            className='outline-none'
          >
            <Image
              src="/logo.png"
              width={270}
              height={90}
              alt="Logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

