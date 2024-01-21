import React from 'react';

export const Location = () => {
  return (
    <div className='main-content-container'>
      <h2 className='where-message'>Where are we going?</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.970391399461!2d-115.56670090687855!3d51.164335262841284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5370ca3b2e2fb8bf%3A0x99e9a92cf4f6ce!2sFairmont%20Banff%20Springs!5e0!3m2!1sen!2sus!4v1705805828463!5m2!1sen!2sus"
        width="300"
        height="300"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
