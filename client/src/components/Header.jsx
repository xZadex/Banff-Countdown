import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';

const Header = () => {
    const targetDate = new Date('2024-02-19T23:59:59');
    const urls = [
      'url("https://www.banff-springs-hotel.com/content/uploads/2022/12/press-Fairmont-Ski-Season-Offers-1920x922.jpg")',
      'url("https://helloadamsfamily.com/wp-content/uploads/2019/10/lake-louise-banff-trip-recap-21-of-36-1.jpg")',
      'url("https://www.rockymountaineer.com/sites/default/files/styles/node__blog_post__bp_blog_hero/public/bh_blog_hero/Banff%20Ave.jpg?h=e189115f&itok=6tH6mU36")',
      'url("https://cdn.sanity.io/images/6sugrgl1/production/36c274b955db0e1e5e8f2a2c8c6a757f4132cbfe-1440x961.jpg?rect=0,162,1440,639&w=1988&h=882&fit=crop")'
    ]
    const [imageIndex, setImageIndex] = useState(0);
    const [image, setImage] = useState(urls[0]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Update the image index to the next one in the list
        setImageIndex((prevIndex) => (prevIndex + 1) % urls.length);
        // Update the image state with the new URL
        setImage(urls[imageIndex]);
      }, 10000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, [imageIndex, urls]);
  
    return (
      <div className='app' style={{backgroundImage:image, transition: 'background-image 1s ease-in-out' }}>
        <h1 className='main-title'>Countdown to <span className='title'>Banff</span></h1>
        <Countdown targetDate={targetDate} />
      </div>
    );
}

export default Header;
