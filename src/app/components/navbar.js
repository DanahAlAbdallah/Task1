'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md' : ''
        }`}
    >
      <div className="container mx-auto py-2 px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold text-blue-sky">
            Euphoria
          </Link>
        </div>

        <ul className="flex space-x-4 md:space-x-6 mt-2 md:mt-0">
          <li>
            <Link href="/register" className="text-blue-sky hover:text-beige-pink">
              Register
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-sky hover:text-beige-pink">
              About us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-blue-sky hover:text-beige-pink">
              Contact us
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
