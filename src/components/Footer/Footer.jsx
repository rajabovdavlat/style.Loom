import { Link } from "react-router-dom";
import { svgs } from "../../assets/images/images";
import Modal from "../Ui/Modal";
import React, { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = [
  { icon: svgs.Instagram, url: "#", name: "Instagram" },
  { icon: svgs.ball, url: "#", name: "ball" },
  { icon: svgs.twitter, url: "#", name: "twitter" },
  { icon: svgs.behance, url: "#", name: "behance" },
];

const Footer = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  return (
    <>
      <footer className='bg-dark borTop'>
        <div className='container '>
          {/* footer 1 */}

          <div className='flexJustifyItems lg:flex-row flex-col py-25'>
            <div>
              <Link className='w-full max-w-[788px]' to='/'>
                <img src={svgs.LogoFooter} alt='LogoFooter' />
              </Link>
            </div>
            <div className='flex gap-5'>
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=''
                  aria-label={item.name}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className='w-[66px] h-[66px] drop-shadow-xl/50  transition-all duration-200 ease-in-out hover:scale-110  active:scale-95 cursor-pointer'
                  />
                </a>
              ))}
            </div>
          </div>

          {/* footer 2 */}

          <div className='py-[96px] flex flex-col md:flex-row items-center md:items-start justify-center gap-10 lg:gap-[80px] borBottom borTop text-center md:text-left'>
            <div className='flex flex-col gap-6'>
              <Link className='text-title text-xl font-bol' to='/'>
                Home
              </Link>
              <div>
                <ul className='space-y-2 text-white flex gap-3'>
                  <li>
                    <button
                      className='desc2'
                      onClick={() => setIsAboutOpen(true)}
                    >
                      Why Us
                    </button>
                  </li>
                  <li>
                    <button
                      className='desc2'
                      onClick={() => setIsAboutUsOpen(true)}
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      className='desc2'
                      onClick={() => setIsTestimonialsOpen(true)}
                    >
                      Testimonials
                    </button>
                  </li>
                  <li>
                    <button
                      className='desc2'
                      onClick={() => setIsFaqOpen(true)}
                    >
                      FAQ’s
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* pruducts */}

            <div className='flex flex-col gap-6'>
              <Link className='text-title text-xl font-bol' to='/products'>
                Products
              </Link>
              <div className='flex gap-3'>
                <p className='desc2'>Menswear</p>
                <p className='desc2'>Womenswear</p>
                <p className='desc2'>Kidswear</p>
              </div>
            </div>

            {/* email input */}

            <div className='flex flex-col justify-between gap-3'>
              <h3 className='text-title text-xl font-bol'>
                Subscribe to Newsletter
              </h3>

              <div className='relative w-full'>
                <input
                  className='bg-desc2 w-full pl-6 pr-14 py-4 rounded-lg text-title outline-none'
                  type='email'
                  placeholder='Your Email'
                />
                <button className='absolute top-1/2 right-4 transform -translate-y-1/2 text-title hover:text-black'>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Modal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        title='Why Us'
      >
        We believe in quality, sustainability, and good design. That’s why we
        created this product.
      </Modal>

      <Modal
        isOpen={isAboutUsOpen}
        onClose={() => setIsAboutUsOpen(false)}
        title='About Us'
      >
        Our team is passionate about creating eco-friendly alternatives that
        make your home beautiful.
      </Modal>

      <Modal
        isOpen={isTestimonialsOpen}
        onClose={() => setIsTestimonialsOpen(false)}
        title='Testimonials'
      >
        “Absolutely love the look and feel!” – Alex
        <br />
        “Best purchase of the year.” – Maria
      </Modal>

      <Modal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
        title='FAQ’s'
      >
        <p>
          <strong>Q:</strong> Do you deliver everywhere in Uzbekistan?
          <br />
          <strong>A:</strong> Yes, we deliver to all regions.
        </p>

        <p className='mt-4'>
          <strong>Q:</strong> Can I wash it in the dishwasher?
          <br />
          <strong>A:</strong> Absolutely! It's 100% dishwasher safe.
        </p>
      </Modal>
    </>
  );
};

export default Footer;
