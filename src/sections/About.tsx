import React from 'react'
import Image from 'next/image';

function About() {
  return (
    <div className='about' id='about'>
      <div className="title">
        <h2>About Us</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex provident deleniti, sapiente velit nisi. Error perspiciatis velit, ullam illo in nisi amet iste reprehenderit fugiat, corrupti impedit praesentium odio.
          </p>
          <p className="about-grid-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex provident deleniti, sapiente velit nisi. Error perspiciatis velit, ullam illo in nisi amet iste reprehenderit fugiat, corrupti impedit praesentium odio.
          </p>
          <p className="about-grid-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex provident deleniti, sapiente velit nisi. Error perspiciatis velit, ullam illo in nisi amet iste reprehenderit fugiat, corrupti impedit praesentium odio.
          </p>
          <p className="about-grid-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ex provident deleniti, sapiente velit nisi. Error perspiciatis velit, ullam illo in nisi amet iste reprehenderit fugiat, corrupti impedit praesentium odio.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies We&apos;ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Sass</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay">
          </div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/aliwains.jpg" alt="Profile" fill />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About