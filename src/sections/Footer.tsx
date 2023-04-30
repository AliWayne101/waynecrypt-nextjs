import React from 'react';
import webDetails from '@/configs/Details';

const Footer = () => {
  return (
    <div className="footer-container">
      Copyright © 2023 {webDetails.webFullName}. All rights reserved.
    </div>
  )
}

export default Footer