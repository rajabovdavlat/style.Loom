import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className='bg-dark borBottom'>
        <div className='container flexJustifyItems py-5.5'>
          <nav className='hidden md:flex flex gap-3'>
            <Link
              className='text-gray hover:text-title active:scale-95 transition transform border-dashed border text-lg hover:bg-black/30 rounded-lg py-3 px-5'
              to='/'
            >
              Home
            </Link>
            <Link
              className='text-gray hover:text-title active:scale-95 transition transform text-lg border-dashed border text-lg hover:bg-black/30 rounded-lg py-3 px-5'
              to='/products'
            >
              Products
            </Link>
          </nav>

          <Link className='text-title text-4xl font-bold' to='/'>
            Style.Loom
          </Link>
          <div className='flex items-center gap-3 '>
            <Link to='/basket'>
              <FontAwesomeIcon
                className=' text-title text-xl active:scale-95 transition transform border-dashed border  hover:bg-black/30 rounded-lg py-3 px-5'
                icon={faShoppingCart}
              />
            </Link>
            <Link
              className='hidden md:block bg-btn rounded-lg py-3 px-5 hover:bg-gray   active:scale-95 transition transform'
              to='/contacts'
            >
              Contacts
            </Link>

            {/* burger icon  */}

            <button
              className='md:hidden text-black py-1.5 px-2.5 rounded-lg hover:text-desc2 text-3xl bg-[#C0B5A5]'
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Модалка бургер */}

      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/90 text-white flex flex-col items-center justify-center gap-8 z-50 md:hidden'>
          <Link
            onClick={() => setIsOpen(false)}
            to='/'
            className='text-2xl hover:text-desc2'
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to='/products'
            className='text-2xl hover:text-desc2'
          >
            Products
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to='/contacts'
            className='text-2xl hover:text-desc2'
          >
            Contacts
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className='absolute top-5 right-5 text-3xl'
          >
            ✖
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
