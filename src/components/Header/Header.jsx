import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-dark'>
      <div className='container flex justify-between items-center py-5.5 '>
        <div className='flex gap-3'>
          <Link
            className='text-gray hover:text-title border-dashed border text-lg hover:bg-black/30 rounded-lg py-3 px-5'
            to='/'
          >
            Home
          </Link>
          <Link
            className='text-gray hover:text-title text-lg border-dashed border text-lg hover:bg-black/30 rounded-lg py-3 px-5'
            to='/products'
          >
            Products
          </Link>
        </div>
        <Link className='text-title text-4xl font-bold' to='/'>
          Style.Loom
        </Link>
        <div className='flex items-center gap-3'>
          <FontAwesomeIcon
            className='text-title text-xl border-dashed border  hover:bg-black/30 rounded-lg py-3 px-5'
            icon={faShoppingCart}
          />

          <Link className='bg-btn rounded-lg py-3 px-5' to='/contacts'>
            Contacts
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
