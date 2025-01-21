import React from 'react';
import Language from './Language';

const Footer = () => {
  const footerLinks = [
    'FAQ',
    'Media center',
    'Ways to watch',
    'Cookie performance',
    'Speed test',
    'Help center',
    'Investor Relations',
    'Terms of use',
    'Corporate information',
    'Legal notice',
    'Amount',
    'Job',
    'Privacy',
    'Contact us',
    'Only on Netflix',
  ];

  // Split the array into three parts
  const section1 = footerLinks.slice(0, 5);
  const section2 = footerLinks.slice(5, 10);
  const section3 = footerLinks.slice(10);

  return (
    <footer className='text-gray-400'>
      <div className='p-[77px]'>
        <div>
          <p>Questions? Call 000-800-191-1743</p>
        </div>
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* Section 1 */}
          <ul>
            {section1.map((link, index) => (
              <li key={index} className='mb-1'>{link}</li>
            ))}
          </ul>

          {/* Section 2 */}
          <ul>
            {section2.map((link, index) => (
              <li key={index} className='mb-1'>{link}</li>
            ))}
          </ul>

          {/* Section 3 */}
          <ul>
            {section3.map((link, index) => (
              <li key={index} className='mb-1'>{link}</li>
            ))}
          </ul>
        </div>
        <div className='mt-10 mb-5'>
          <Language />
        </div>
        <div>Netflix India</div>
      </div>
    </footer>
  );
};

export default Footer;
