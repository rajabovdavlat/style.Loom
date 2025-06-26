import React from "react";
import { Link } from "react-router-dom";
import { svgs } from "../../assets/images/images";

const socialLinks = [
  { icon: svgs.Instagram, url: "#", name: "Instagram" },
  { icon: svgs.ball, url: "#", name: "ball" },
  { icon: svgs.twitter, url: "#", name: "twitter" },
  { icon: svgs.behance, url: "#", name: "behance" },
];

const Footer = () => {
  return (
    <footer className='py-25 bg-dark border border-t-2 border-b-2  border-dashed border-title'>
      <div className='container flex justify-between items-center'>
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
                className='w-[66px] h-[66px]'
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
