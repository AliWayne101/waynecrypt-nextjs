import React, { useState } from 'react';
import Navbar from '@/sections/Navbar';
import SocialIcons from '@/components/SocialIcons';
import Email from '@/components/Email';
import Home from '@/sections/Home';
import About from '@/sections/About';
import Expertise from '@/sections/Expertise';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Head from 'next/head';
import Loader from '@/components/Loader';
import webDetails from '@/configs/Details';
import Footer from '@/sections/Footer';

function Index() {

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() =>
      setShowContent(true), 450
    );
  }

  return (
    <div className='app'>
      <Head>
        <title>{webDetails.webName}</title>
        <link rel="shortcut icon" href="/favicon.svg" color='#9d00ff' />
        <meta name="description" content="We are a team of dedicated and passionate developers who are committed to delivering top-quality software solutions to businesses of all sizes. Our goal is to help our clients streamline their operations, increase productivity, and drive growth through the power of technology." />
        <meta name="author" content="Ali A. Wains" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {
        showContent && (
          <>
            <Navbar />
            <SocialIcons />
            <Email />

            <main>
              <Home />
              <About />
              <Expertise />
              <Projects />
              <Contact />
              
              <Footer />
            </main>
          </>
        )
      }
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index