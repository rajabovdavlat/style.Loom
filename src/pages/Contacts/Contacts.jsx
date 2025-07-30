import React from 'react'
import ContactsInfo from './ContactsInfo/ContactsInfo';
import ContactInfoPage from './ContactInfoPage/ContactInfoPage';
import ContactsHero from './ContactsHero/ContactsHero';

const Contacts = () => {
  return (
    <div className='bg-dark text-title'>
      <div>
        <ContactsInfo />
        <ContactInfoPage />
        <ContactsHero />

      </div>
    </div>
  );
}

export default Contacts