import React from 'react'
import Navbar from '@/sections/Navbar';
import SocialIcons from '@/components/SocialIcons';
import Email from '@/components/Email';
import Home from '@/sections/Home';
import About from '@/sections/About';
import Expertise from '@/sections/Expertise';

function Index() {
  return (
    <div className='app'>
      <Navbar />
      <SocialIcons />
      <Email />

      <main>
        <Home />
        <About />
        <Expertise />
      </main>
    </div>
  );
}

export default Index